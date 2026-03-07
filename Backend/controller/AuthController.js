import Auth from "../model/AuthModel.js";
import bcrypt from "bcrypt";
import { z } from "zod";
import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'
const signupSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});


export const Signup = async (req, res) => {
  try {
    const parsed = signupSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: parsed.error.issues[0].message,
      });
    }

    const { name, email, password } = parsed.data;

    const existingUser = await Auth.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Account already exists please login",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await Auth.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
    });

  } catch (error) {
    console.error("Signup Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    // 2️⃣ Check Auth exists
    const user = await Auth.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Not registered create account first",
      });
    }

    // 3️⃣ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // 4️⃣ Generate JWT token
    const token = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        role: user.role || "user", // optional if you have roles
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
//  res.cookie("token", token, {
//     httpOnly: true, // prevents client JS from accessing cookie
//     secure: false, // set true in production (HTTPS)
//     sameSite: "lax",
//     maxAge: 3600000, // 1 hour in ms
//   });
    // 5️⃣ Send response
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user,
    });
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const Logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true, 
      secure: false, 
      sameSite: "lax",
    });

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  } catch (error) {
    console.error("Logout Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getallAuth = async (req, res) => {
  try {
    const user = await Auth.find();
    
    if (user.length==0) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    console.error("Get Auth Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


export const deleteAuth = async (req, res) => {
  try {
    const {id}=req.params
    const user = await Auth.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Delete Auth Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};