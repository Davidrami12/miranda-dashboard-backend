import mongoose from 'mongoose';
const { Schema } = mongoose;
import { RoomInterface } from '../models/Room';

const roomSchema = new Schema<RoomInterface>({
  room_number: {
    type: Number,
    required: true,
    unique: true
  },
  photo: {
    type: String,
    required: true
  },
  photoTwo: {
    type: String,
    required: true
  },
  photoThree: {
    type: String,
    required: true
  },
  photoFour: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  discountPercent: {
    type: Number,
  },
  discount: {
    type: String,
    required: true
  },
  cancellationPolicy: {
    type: String,
    required: true
  },
  bed_type: {
    type: String,
    required: true
  },
  room_facilities: {
    type: [String]
  },
  room_rate: {
    type: Number,
    required: true
  },
  room_offer: {
    type: Number,
  },
  room_status: {
    type: String,
    required: true
  },
});

export const Room = mongoose.model('Room', roomSchema);