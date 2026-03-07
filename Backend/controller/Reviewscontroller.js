import Reviews from "../model/ReviewsModel.js";
import User from "../model/UserModel.js";
export const submitReviews = async (req, res) => {
  try {
    const { reviewstext, rating } = req.body;

    // ✅ Validate review text
    if (!reviewstext || !reviewstext.trim()) {
      return res.status(400).json({
        success: false,
        message: "Review text is required.",
      });
    }

    // ✅ Validate rating (must be 1-5)
    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5.",
      });
    }

    // ✅ Create review linked to logged-in user
    const review = await Reviews.create({
      user: req.userId,          // set by verifyToken middleware
      reviewstext: reviewstext.trim(),
      rating,
    });

    return res.status(201).json({
      success: true,
      message: "Review added successfully",
      data: review,
    });
  } catch (error) {
    console.error("Submit Review Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getReviews = async (req, res) => {
  try {
    const addedreviews = await Reviews.find()
      .populate('user', 'name role');

    if (!addedreviews || addedreviews.length === 0) {
      return res.status(404).json({ message: 'No reviews found' });
    }

    return res.status(200).json({ addedreviews });

  } catch (error) {
    console.error("GET REVIEWS ERROR:", error);  // VERY IMPORTANT
    return res.status(500).json({ error: "Internal server error" });
  }
}

