import { generateFakerData } from './seed';
import { Booking } from '../schemas/booking.schema';
import { Room } from '../schemas/room.schema';
import { User } from '../schemas/user.schema';
import { Contact } from '../schemas/contact.schema';
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