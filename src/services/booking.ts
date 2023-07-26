import fs from "fs";
import path from "path";
import express from "express";
import { BookingInterface } from "../models/booking";
import uuid from "react-uuid";

const directory = path.join(__dirname, "..", "data", "bookings.json");
const readBookings = fs.readFileSync(directory, "utf8");
const bookingsJson = JSON.parse(readBookings);

export const getBookingsService = async (req: express.Request, res: express.Response) => {
  return readBookings;
};

export const getBookingService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const bookingId = bookingsJson.find((booking: BookingInterface) => booking.id == id);
  /* console.log('ID:', id);
  console.log('Bookings:', bookingsJson); */
  
  if (!bookingId) {
    res.status(404).json({ message: "Booking not found" });
    return;
  }
  
  res.send(JSON.stringify(bookingId));
};


export const postBookingService = async (req: express.Request, res: express.Response) => {
  /* const newBooking: BookingInterface = { ...req.body, id: uuid() };
  bookingsJson.push(newBooking);
  fs.writeFileSync(directory, JSON.stringify(bookingsJson));
  const newReadBookings = fs.readFileSync(directory, "utf8");
  res.send(newReadBookings); */
};

export const deleteBookingService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const bookingIndex = bookingsJson.findIndex((booking: BookingInterface) => booking.id == id);

  if (bookingIndex === -1) {
    return res.status(404).json({ message: 'Booking not found' });
  }

  bookingsJson.splice(bookingIndex, 1);
  fs.writeFileSync(directory, JSON.stringify(bookingsJson));

  return res.status(200).json({ message: 'Booking deleted successfully' });
};


export const updateBookingService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  let newArray: BookingInterface[] = [];
  let booking: BookingInterface | undefined = bookingsJson.find((booking: BookingInterface) => booking.id === id);
  booking = { ...booking, ...req.body };

  if (booking) {
    newArray = bookingsJson.filter((bookingFilt: BookingInterface) => bookingFilt.id !== id);
    newArray.push(booking);
  }
  
  fs.writeFileSync(directory, JSON.stringify(newArray));
  const newReadBookings = fs.readFileSync(directory, "utf8");
  res.send(newReadBookings);
};