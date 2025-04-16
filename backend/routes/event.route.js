import express  from "express";
const router = express.Router();
// const eventController = require('../controllers/eventController');
import * as eventController from "../controllers/event.controller.js";


router.post('/create', eventController.createEvent);
router.post('/register', eventController.registerForEvent);
router.get('/get', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);

router.put('/:id', eventController.updateEvent);
router.delete('/:id', eventController.deleteEvent);
router.get('/recording/:zoomMeetingId', eventController.getZoomRecording);

export default router;
