import { generateFakerData } from './seed';
import { Booking } from './schemas/bookingSchema';
import { Room } from './schemas/roomSchema';
import { User } from './schemas/userSchema';
import { Contact } from './schemas/contactSchema';
import { connection } from './connection';
import { disconnect } from 'mongoose';

export const seedDatabase = async () => {

  await connection();

  // Clean the database
  await Promise.all([
    Booking.deleteMany({}),
    Room.deleteMany({}),
    User.deleteMany({}),
    Contact.deleteMany({})
  ]);

  // Generate new data
  await generateFakerData();

  await disconnect();
};

seedDatabase();