import {Feedback} from "../models/feedback.model.js";

export const createFeedback = async (req, res) => {
  try {
    const { userId, eventId, rating, comments } = req.body;
    if (!userId || !eventId || !rating || !comments) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    const feedback = await Feedback.create({
      userId,
      eventId,
      rating,
      comments,
    });
    return res.status(201).json({
      message: "Feedback Submitted Successfully",
      feedback,
      success: false,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Unable to submit feedback.",
      success: false,
    });
  }
};
export const getFeedbackByEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const feedback = await Feedback.find({ eventId }).populate(
      "userId",
      "fullName email"
    );
    if (!feedback.length) {
      return res.status(404).json({
        message: "No feedback for this event.",
        success: false,
      });
      return res.status(200).json({
        feedback,
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Unable to fetch  feedback",
      success: false,
    });
  }
};

export const getfeedbackByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const feedback = await Feedback.find({ userId }).populate(
      "eventId",
      "name date"
    );
    if (!feedback.length) {
      return res.status(404).json({
        message: "No feedback found for this user",
        success: false,
      });
      return res.status(200).json({
        feedback,
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Unable to fetch the feedback",
      success: false,
    });
  }
};

export const updateFeedback = async (req, res) => {
  try {
    const { feedbackId } = req.params;
    const { rating, comments } = req.body;

    const feedback = await Feedback.findById({ feedbackId });
    if (!feedback) {
      return res.status(404).json({
        message: "Feedback not found.",
        success: false,
      });
      if (rating) feedback.rating = rating;
      if (comments) feedback.comments = comments;
      await feedback.save();

      return res.status(200).json({
        feedback,
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Unable to update feedback.",
      success: false,
    });
  }
};

export const deleteFeedback =  async(req,res)=>{
  try {
       const {feedbackId} = req.params;   
       const feedback = await Feedback.findByIdAndDelete({feedbackId});
       if(!feedback){
          return res.status(404).json({
                    message:"Feedback not found.",
                    success:false
          });
          return res.status(201).json({
                    message:"Feedback deleted Successfully.",
                    success:false
          });
       }
  } catch (error) {
          console.log(error);
          return res.status(500).json({
                    message:"Unable to delete feedback.",
                    success:false
          });
          
  }
}