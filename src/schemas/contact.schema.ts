import mongoose from 'mongoose';
const { Schema } = mongoose;
import { ContactInterface } from '../models/Contact';

const contactSchema = new Schema<ContactInterface>({
  date: {
    type: String,
    required: true
  },
  customer: {
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  button: {
    type: String,
    required: true
  }
});

export const Contact = mongoose.model('Contact', contactSchema);