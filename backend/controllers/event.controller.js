import {Event} from "../models/event.model.js";
import { getZoomAccessToken } from '../services/zoomService.js';
import axios from "axios";
import mongoose from "mongoose";

//  Create a Zoom Meeting
const createZoomMeeting = async (title, description, startTime) => {
  const accessToken = await getZoomAccessToken();

  const meetingConfig = {
    topic: title,
    type: 2,
    start_time: startTime,
    duration: 60,
    timezone: "UTC",
    agenda: description,
    settings: {
      host_video: true,
      participant_video: true,
      join_before_host: false,
      mute_upon_entry: true,
      waiting_room: true,
    },
  };

  try {
    const response = await axios.post('https://api.zoom.us/v2/users/me/meetings', meetingConfig, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating Zoom meeting:', error.response?.data);
    throw new Error('Failed to create Zoom meeting');
  }
};
        
export const createEvent = async (req, res) => {
          try {
            console.log("Received Request Body:", req.body); // Debugging log
        
            const { title, description, eventType, date, time, venue, zoomLink, zoomMeetingId, zoomPasscode, organizer, capacity,paymentType,price } = req.body;
        
            if (!eventType) {
              return res.status(400).json({ error: "eventType is missing from the request body" });
            }
        
            const newEvent = new Event({
              title,
              description,
              eventType,
              date,
              time,
              venue,
              zoomLink,
              zoomMeetingId,
              zoomPasscode,
              paymentType,
              price,
          //     organizer,
          organizer: new mongoose.Types.ObjectId(organizer), 

              capacity
            });
        
            await newEvent.save();
            res.status(201).json({ message: "Event created successfully", event: newEvent });
          } catch (error) {
            console.error("Error creating event:", error);
            res.status(500).json({ error: error.message });
          }
        };
        


export async function registerForEvent(req, res) {
          try {
            console.log("Received Request Body:", req.body);
            
            const { eventId, userId } = req.body;
        
            if (!eventId || !userId) {
              return res.status(400).json({ message: "eventId and userId are required" });
            }
        
            if (!mongoose.Types.ObjectId.isValid(eventId) || !mongoose.Types.ObjectId.isValid(userId)) {
              return res.status(400).json({ message: "Invalid ID format" });
            }
        
            const event = await Event.findById(eventId);
            
            if (!event) {
              return res.status(404).json({ message: "Event not found" });
            }
        
            console.log("Fetched Event Data:", event); // Debugging Log
        
            if (!Array.isArray(event.attendees)) {
              event.attendees = [];
            }
        
            if (event.attendees.includes(userId)) {
              return res.status(400).json({ message: "User already registered" });
            }
        
            if (event.attendees.length >= event.capacity) {
              return res.status(400).json({ message: "Event is full" });
            }
        
            event.attendees.push(new mongoose.Types.ObjectId(userId));
            await event.save();
        
            res.status(200).json({ message: "User registered successfully", event });
          } catch (error) {
            console.error("Error registering for event:", error);
            res.status(500).json({ message: "Error registering for event", error: error.message });
          }
        }
        


//  Get Event Details by ID
export async function getEventById(req, res) {
  try {
    const event = await Event.findById(req.params.id).populate('organizer attendees', 'name email');

    if (!event) return res.status(404).json({ message: 'Event not found' });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching event', error: error.message });
  }
}

//  Get All Events
// export const getAllEvents = async (req, res) => {
//   try {
//     const events = await Event.find();
//     res.status(200).json(events);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();

    if (!events.length) {
      return res.status(200).json({ success: false, message: "No events found", data: [] });
    }

    res.status(200).json({ success: true, data: events });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


//  Update an Event
export async function updateEvent(req, res) {
  try {
    const { title, description, date } = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, { title, description, date }, { new: true });

    if (!updatedEvent) return res.status(404).json({ message: 'Event not found' });

    res.status(200).json({ message: 'Event updated successfully', event: updatedEvent });
  } catch (error) {
    res.status(500).json({ message: 'Error updating event', error: error.message });
  }
}

//  Delete an Event
export async function deleteEvent(req, res) {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);

    if (!deletedEvent) return res.status(404).json({ message: 'Event not found' });

    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting event', error: error.message });
  }
}

// Get Zoom Recording Link
export async function getZoomRecording(req, res) {
  try {
    const { zoomMeetingId } = req.params;
    const accessToken = await getZoomAccessToken();

    const response = await axios.get(`https://api.zoom.us/v2/meetings/${zoomMeetingId}/recordings`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching recording', error: error.message });
  }
}
