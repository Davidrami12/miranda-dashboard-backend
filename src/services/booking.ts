import bookingsJSON from "../data/bookings.json";
import { Booking } from "../models/booking";

export const bookings = bookingsJSON as Booking[];

async function get() {
  // Get all bookings from json file
}

async function getById(bookingId: number) {
  // Get a booking by id from json file
}

async function post(booking: Booking) {
  // Save a booking to json file
}

async function put(bookingId: number, update: Partial<Booking>) {
  // Update a booking by id and save to json file
}

async function _delete(bookingId: number) {
  // Delete a booking by id from json file
}

export const bookingService = {
  get,
  getById,
  post,
  put,
  delete: _delete,
};