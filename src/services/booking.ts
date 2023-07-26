import fs from "fs";
import path from "path";
import express from "express";
import { BookingInterface } from "../models/booking";
import uuid from "react-uuid";
import bookings from "../data/bookings.json";
const directory = path.join(__dirname, "..", "data", "bookings.json");
const readBookings = fs.readFileSync(directory, "utf8");
const bookingsJson = JSON.parse(readBookings);

export const getBookingsService = async (req: express.Request, res: express.Response) => {
  //res.json(bookings);
  return readBookings; 
};

export const getBookingService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const bookingId = bookingsJson.find((booking: BookingInterface) => booking.id == id);
  
  if (!bookingId) {
    res.status(404).json({ message: "Booking not found" });
    return;
  }
  
  res.send(JSON.stringify(bookingId));
};


export const postBookingService = async (req: express.Request, res: express.Response) => {
  const newBooking: BookingInterface = { ...req.body, id: uuid() };

  bookingsJson.push(newBooking);

  fs.writeFileSync(directory, JSON.stringify(bookingsJson));

  res.status(201).json({ message: 'Booking successfully created!', booking: newBooking });
};


export const deleteBookingService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const index = bookingsJson.findIndex((booking: BookingInterface) => booking.id == id);

  if (index === -1) {
    res.status(404).json({ message: "Booking not found" });
    return;
  }
  
  bookingsJson.splice(index, 1);
  fs.writeFileSync(directory, JSON.stringify(bookingsJson));
  
  res.send({ message: "Booking successfully deleted" });
};



export const updateBookingService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const index = bookingsJson.findIndex((booking: BookingInterface) => booking.id == id);

  if (index === -1) {
    res.status(404).json({ message: "Booking not found" });
    return;
  }

  const updatedBooking: BookingInterface = { ...bookingsJson[index], ...req.body };
  bookingsJson[index] = updatedBooking;
  fs.writeFileSync(directory, JSON.stringify(bookingsJson));

  res.json({ message: "Booking successfully updated", booking: updatedBooking });
};
