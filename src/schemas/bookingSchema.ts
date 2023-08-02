import mongoose from 'mongoose';
const { Schema } = mongoose;
import { BookingInterface } from '../models/Booking';

const bookingSchema = new Schema<BookingInterface>({
  bookingID: { 
    type: Number, 
    required: true, 
    unique: true 
  },
  userName: { 
    type: String, 
    required: true 
  },
  userPicture: { 
    type: String, 
    required: true 
  },
  orderDate: { 
    type: String, 
    required: true 
  },
  checkIn: { 
    type: String, 
    required: true 
  },
  checkOut: { 
    type: String, 
    required: true 
  },
  specialRequest: { 
    type: String 
  },
  roomType: { 
    type: String, 
    required: true 
  },
  status: { 
    type: String, 
    required: true 
  },
});

export const Booking = mongoose.model('Booking', bookingSchema);