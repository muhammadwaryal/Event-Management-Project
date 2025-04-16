// // import mongoose from "mongoose";

// // const eventSchema = new mongoose.Schema(
// //   {
// //     title: {
// //       type: String,
// //       require: true,
// //     },
// //     description: {
// //       type: String,
// //       required: true,
// //     },
// //     date: {
// //       type: Date,
// //       required: true,
// //     },
// //     venue: {
// //       type: String,
// //     },
// //     eventType: {
// //       type: String,
// //       enum: ["virtual", "physical"],
// //       required: true,
// //     },
// //     zoomLink: {
// //       type: String,
// //     },
// //     organiser: {
// //       type: mongoose.Schema.Types.ObjectId,
// //       ref: "User",
// //       required: true,
// //     },
// //     attendees: [
// //       {
// //         type: mongoose.Schema.Types.ObjectId,
// //         ref: "User",
// //       },
// //     ],
// //   },
// //   { timestamps: true }
// // );
// // export const Event = mongoose.model("Event", eventSchema);

// import mongoose from "mongoose";

// const eventSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: {
//     type: String,
//     required: true,
//   },
//   eventType: {
//     type: String,
//     enum: ['Physical', 'Remote'],
//     required: true,
//   },
//   date: {
//     type: Date,
//     required: true,
//   },
//   time: {
//     type: String,
//     required: true,
//   },
//   venue: {
//     type: String, // Only for physical events
//     required: function() {
//       return this.eventType === 'Physical';
//     },
//   },
//   zoomLink: {
//     type: String, // Only for remote events
//     required: function() {
//       return this.eventType === 'Remote';
//     },
//   },
//   zoomMeetingId: {
//     type: String, // Zoom meeting ID for remote events
//     required: function() {
//       return this.eventType === 'Remote';
//     },
//   },
//   zoomPasscode: {
//     type: String, // Zoom passcode for remote events
//     required: function() {
//       return this.eventType === 'Remote';
//     },
//   },
//   organizer: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   participants: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//     },
//   ],
//   capacity: {
//     type: Number,
//     required: true,
//   },
//   status: {
//     type: String,
//     enum: ['Upcoming', 'Ongoing', 'Completed'],
//     default: 'Upcoming',
//   },
// }, { timestamps: true });

// // export const Event = mongoose.model("Event" ,eventSchema);
// export const Event = mongoose.model("Event", eventSchema);

import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    enum: ['Physical', 'Remote'],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  venue: {
    type: String, // Only for physical events
    required: function() {
      return this.eventType === 'Physical';
    },
  },
  zoomLink: {
    type: String, // Only for remote events
    required: function() {
      return this.eventType === 'Remote';
    },
  },
  zoomMeetingId: {
    type: String, // Zoom meeting ID for remote events
    required: function() {
      return this.eventType === 'Remote';
    },
  },
  zoomPasscode: {
    type: String, // Zoom passcode for remote events
    required: function() {
      return this.eventType === 'Remote';
    },
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  capacity: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    enum: ['Upcoming', 'Ongoing', 'Completed'],
    default: 'Upcoming',
  },
  paymentType: {
    type: String,
    enum: ['Paid', 'Unpaid'],
    required: true,
  },
  price: {
    type: Number,
    required: function() {
      return this.paymentType === 'Paid';
    },
  },
}, { timestamps: true });

export const Event = mongoose.model("Event", eventSchema);
