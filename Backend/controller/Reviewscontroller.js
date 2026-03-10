import Reviews from "../model/ReviewsModel.js";
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
      userId: req.userId,          // set by verifyToken middleware
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

    const reviews = await Reviews.find()
      .populate("userId", "name role ")
      .sort({ _id: -1 });

    res.status(200).json({
      addedreviews: reviews
    });

  } catch (error) {
    console.error("GET REVIEWS ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteReview = async (req, res) => {
  try {

    const { id } = req.params;

    const review = await Reviews.findById(id);

    if (!review) {
      return res.status(404).json({
        message: "Review not found"
      });
    }

    await Reviews.findByIdAndDelete(id);

    res.status(200).json({
      message: "Review deleted successfully"
    });

  } catch (error) {
    console.error("DELETE REVIEW ERROR:", error);

    res.status(500).json({
      message: "Server error"
    });
  }
};

