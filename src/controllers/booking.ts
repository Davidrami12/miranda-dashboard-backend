import express from "express";
import { BookingInterface } from "../models/Booking";
import { deleteBookingService, getBookingService, getBookingsService, postBookingService, updateBookingService } from "../services/booking";
import { Booking } from "../schemas/bookingSchema"

//GET all bookings
export const getBookings = async (req: express.Request, res: express.Response) => {
  try {
    const bookings = await Booking.find({});
    res.status(200).json(bookings);

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//GET booking by id
export const getBooking = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);
    if (!booking){
      return res.status(404).json({ message: 'Booking not found' });
    }
    res.status(200).json(booking);

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//POST new Booking
export const postBooking = async (req: express.Request, res: express.Response) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(200).json(booking);

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//DELETE booking
export const deleteBooking = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const deleted = await Booking.findByIdAndDelete(id);
    if (!deleted){
      return res.status(404).json({ message: 'Booking not found' });
    } 
    res.status(200).json({ message: 'Booking deleted' });

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//UPDATE booking
export const updateBooking = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findByIdAndUpdate(id, req.body, { new: true });
    if (!booking){
      return res.status(404).json({ message: 'Booking not found' });
    } 
    res.status(200).json(booking);
    
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};