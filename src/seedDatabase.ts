import { generateFakerData } from './seed';
import { Booking } from './schemas/bookingSchema';
import { Room } from './schemas/roomSchema';
import { User } from './schemas/userSchema';
import { Contact } from './schemas/contactSchema';

export const seedDatabase = async () => {

  // Clean the database
  await Promise.all([
    Booking.deleteMany({}),
    Room.deleteMany({}),
    User.deleteMany({}),
    Contact.deleteMany({})
  ]);

  // Generate new data
  await generateFakerData();

  console.log("Database seeded successfully!");
};
