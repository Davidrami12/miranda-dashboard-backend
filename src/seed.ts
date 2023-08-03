import mongoose from 'mongoose';
import { faker } from '@faker-js/faker';

// Import mongoose schemas
import { Booking } from './schemas/bookingSchema';
import { Room } from './schemas/roomSchema';
import { User } from './schemas/userSchema';
import { Contact } from './schemas/contactSchema';


// Functions to generate random data 
const generateBooking = async () => {
  const bookings = []
  for (let i = 0; i < 10; i++) {
    const booking = {
      bookingID: faker.number.int(),
      userName: faker.person.fullName(),
      userPicture: faker.image.url(),
      orderDate: faker.date.anytime().toISOString(),
      checkIn: faker.date.anytime().toISOString(),
      checkOut:faker.date.anytime().toISOString(),
      specialRequest: faker.lorem.lines(1),
      roomType: faker.helpers.arrayElement(['Single Bed', 'Double Superior', 'Suite']),
      status: faker.helpers.arrayElement(['Check In', 'Check Out', 'In Progress'])
    };
    bookings.push(booking);
  }
  await Booking.insertMany(bookings);
};

function getRandomSubarray(arr: string[]): string[] {
  let shuffled = arr.slice(0), i = arr.length, min = Math.floor(Math.random() * i), temp, index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

const generateRooms = async () => {
  const rooms = [];
  const facilities = ["AC", "Shower", "Towel", "Bathtub", "Coffee Set", "LED TV", "Wi-Fi"];
  for (let i = 0; i < 10; i++) {
    const room = {
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
      room_facilities: getRandomSubarray(facilities).join(', '),
      room_rate: faker.number.int({ min: 1, max: 99 }),
      room_offer: faker.datatype.boolean(),
      room_status: faker.helpers.arrayElement(['Available', 'Booked']),
    };
    rooms.push(room);
  }
  await Room.insertMany(rooms);
};

const generateUsers = async () => {
  const users = [];
  for (let i = 0; i < 10; i++) {
    const user = {
      photo: faker.image.url(),
      name: faker.person.fullName(),
      position: faker.person.jobTitle(),
      email: faker.internet.email(),
      phone: faker.phone.number('91 ### ## ##'),
      date: faker.date.between('01/12/2022', '12/12/2023').toLocaleDateString(),
      // date: faker.date.betweens({from: '01/01/2022', to: '29/12/2023'}).toLocaleDateString(),
      description: faker.person.jobDescriptor(),
      state: faker.helpers.arrayElement(['ACTIVE', 'INACTIVE']),
      pass: faker.internet.password()
    };
    users.push(user);
  }
  await User.insertMany(users);
};

const generateContact = async () => {
  const contacts = [];
  for (let i = 0; i < 10; i++) {
    const contact = {
      date: faker.date.anytime().toISOString(),
      customer: faker.person.fullName(),
      comment: faker.lorem.lines(1),
      button: faker.helpers.arrayElement(['publish', 'archive'])
    };
    contacts.push(contact);
  }
  await Contact.insertMany(contacts);
};



export const generateFakerData = async () => {
  await Promise.all([
    generateBooking(),
    generateRooms(),
    generateUsers(),
    generateContact(),
  ]);
};