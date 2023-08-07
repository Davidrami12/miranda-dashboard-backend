import mongoose from 'mongoose';
const { Schema } = mongoose;
import { UserInterface } from '../models/User';

const userSchema = new Schema<UserInterface>({
  photo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  pass: {
    type: String,
    required: true
  },
});

export const User = mongoose.model('User', userSchema);