import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';
import { Booking } from './schemas/bookingSchema';
import { Room } from './schemas/roomSchema';
import { User } from './schemas/userSchema';
import { Contact } from './schemas/contactSchema';

export const generateRooms = async () => {
  // Promise all
  for (let i = 0; i < 10; i++) {
    const room = new Room({
      id: faker.string.uuid(),
      room_number: faker.number.int(),
      photo: faker.image.url(),
      photoTwo: faker.image.url(),
      photoThree: faker.image.url(),
      photoFour: faker.image.url(),
      description: faker.lorem.paragraph(),
      discountPercent: faker.number.int(),
      discount: faker.datatype.boolean(),
      cancellationPolicy: faker.lorem.paragraph(),
      bed_type: faker.helpers.arrayElement(['Single', 'Double', 'Suite']),
      room_facilities: faker.helpers.arrayElement(['TV', 'Coffee', '']),
      room_rate: faker.number.int({ min: 1, max: 99 }),
      room_offer: faker.datatype.boolean(),
      room_status: faker.helpers.arrayElement(['Available', 'Booked']),
    });
    await room.save();
  }
};


export const generateUsers = async () => {
  for (let i = 0; i < 10; i++) {
    const user = new User({
      id: faker.string.uuid(),
      photo: faker.image.url(),
      name: faker.name.fullName(),
      position: 
      email: 
      phone: 
      date: 
      description: 
      state: 
      pass: 
    });
    await user.save();
  }
};