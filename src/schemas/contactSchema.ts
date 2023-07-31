import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
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

module.exports = mongoose.model('Contact', contactSchema);