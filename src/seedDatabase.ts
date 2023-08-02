import { connection } from './connection';
import { generateFakerData } from './seed';
import { Booking } from './schemas/bookingSchema';
import { Room } from './schemas/roomSchema';
import { User } from './schemas/userSchema';
import { Contact } from './schemas/contactSchema';

const seedDatabase = async () => {
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

  console.log("Database seeded successfully!");
};

seedDatabase().catch((error) => {
  console.error("Error while seeding the database: ", error);
  process.exit(1);
});
