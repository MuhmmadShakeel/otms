import User from "../model/UserModel.js";
import cloudinary from 'cloudinary'




export const createUser = async (req, res) => {
  try {
    const { name, email, role } = req.body;

    // Basic validation
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and Email are required",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    let imageData = null;

    // Upload profile image if provided
    if (req.file && req.file.path) {
      try {
        const uploadedImage = await cloudinary.v2.uploader.upload(
          req.file.path,
          {
            folder: "OTMS/Users",
            resource_type: "image",
          }
        );

        imageData = {
          public_id: uploadedImage.public_id,
          url: uploadedImage.secure_url,
        };
      } catch (cloudError) {
        console.error("Cloudinary Error:", cloudError);
        return res.status(500).json({
          success: false,
          message: "Image upload failed",
        });
      }
    }

    // Create user
    const newUser = await User.create({
      name,
      email,
      role: role || "user", // default role
      profileImage: imageData,
    });

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      user: newUser,
    });

  } catch (error) {
    console.error("Create User Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Exclude password
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


export const updateUser = async (req, res) => {
  try {
       const parsed = signupSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: parsed.error.issues[0].message,
      });
    }
    const { id } = req.params;
    const { name, email, password } = req.body;

    const updateData = {};

    if (name) updateData.name = name;
    if (email) updateData.email = email;
    if (password) updateData.password = await bcrypt.hash(password, 10);

    // Upload new profile image
    if (req.file) {
      const uploadedImage = await cloudinary.v2.uploader.upload(req.file.path, {
        folder: "OTMS/Users",
        resource_type: "auto",
      });
      updateData.profileImage = {
        public_id: uploadedImage.public_id,
        url: uploadedImage.secure_url,
      };
    }

const updatedUser = await User.findByIdAndUpdate(id, updateData, { returnDocument: "after" }).select("-password");
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};