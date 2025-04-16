import express from "express";
import { createFeedback, deleteFeedback, getFeedbackByEvent, getfeedbackByUser, updateFeedback } from "../controllers/feedback.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

router.route("/create").post(isAuthenticated,createFeedback);
router.route("/get/:id").get(getFeedbackByEvent);
router.route('/get/:id').get(getfeedbackByUser);
router.route('/update/:id').post(isAuthenticated,updateFeedback);
router.route('/delete/:id').delete(isAuthenticated,deleteFeedback);

export default router;
