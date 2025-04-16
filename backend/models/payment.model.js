import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "failed", "completed"],
      default: "pending",
      requied: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentDate: {
      type: Date,
      default: Date.now,
    },
    transactionId: {
      type: String,
      unique: true,
      required: true,
    },
    CardHolderName: {
      type: String,
      required: true,
    },
    CardNumber: {
      type: String,
      required: true,
    },
    cardCVV: {
      type: String,
      required: true,
    },
    cardExpirationDate: { type: String, required: true },
    paymentMethod: {
      type: String,
      enum: ["BankCard", "CreditCard", "DebitCard"],
      required: true,
    },
  },
  { timestamps: true }
);

export const payment  = mongoose.model('payment',paymentSchema);