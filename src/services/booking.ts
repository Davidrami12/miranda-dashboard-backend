import express from "express";
import { BookingInterface } from "../models/Booking";
import { Booking } from "../schemas/bookingSchema";

export const getBookingsService = async () => {
  return await Booking.find({});
};

export const getBookingService = async (id: string) => {
  const booking = await Booking.findById(id);
  if (!booking){
    throw new Error('Booking not found');
  } 
  return booking;
};

export const postBookingService = async (bookingData: BookingInterface) => {
  const booking = new Booking(bookingData);
  await booking.save();
  return booking;
};

export const deleteBookingService = async (id: string) => {
  const booking = await Booking.findByIdAndDelete(id);
  if (!booking){
    throw new Error('Booking not found');
  } 
  return booking;
};

export const updateBookingService = async (id: string, updatedData: Partial<BookingInterface>) => {
  const booking = await Booking.findByIdAndUpdate(id, updatedData, { new: true });
  if (!booking){
    throw new Error('Booking not found');
  } 
  return booking;
};