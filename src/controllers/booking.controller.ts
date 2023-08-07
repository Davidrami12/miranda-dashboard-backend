import express from "express";
import { BookingInterface } from "../models/Booking";
import { deleteBookingService, getBookingService, getBookingsService, postBookingService, updateBookingService } from "../services/booking.service";
import { Booking } from "../schemas/booking.schema"

//GET all rooms
export const getBookings = async (req: express.Request, res: express.Response) => {
  try {
    const rooms = await getBookingsService();
    res.status(200).json(rooms);
    
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//GET room by id
export const getBooking = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const room = await getBookingService(id);
    res.status(200).json(room);

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//POST new Booking
export const postBooking = async (req: express.Request<{},{},BookingInterface> , res: express.Response) => {
  try {
    const room = await postBookingService(req.body);
    res.status(201).json({ message: 'Booking successfully created!', room });

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//DELETE room
export const deleteBooking = async (req: express.Request<{id: string}>, res: express.Response) => {
  try {
    const { id } = req.params;
    const room = await deleteBookingService(id);
    res.status(200).json({ message: "Booking successfully deleted", room });

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//UPDATE room
export const updateBooking = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const room = await updateBookingService(id, req.body);
    res.status(200).json({ message: "Booking successfully updated", room });

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};