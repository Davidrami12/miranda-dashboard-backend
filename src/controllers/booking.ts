import { Request, Response, Router } from "express";

import { BookingInterface } from "../models/booking";

export const bookingsController = Router();

bookingsController.get("/", async (req: Request, res: Response) => {
  // Get all bookings
});

bookingsController.get(
  ":id",
  async (req: Request<{ id: number }>, res: Response) => {
    // Get a booking by id
  }
);

bookingsController.post(
  "/",
  async (req: Request<{}, {}, BookingInterface>, res: Response) => {
    // Save a booking
  }
);

bookingsController.put(
  "/:id",
  async (req: Request<{ id: number }, {}, BookingInterface>, res: Response) => {
    // Update a booking by id
  }
);

bookingsController.delete(
  "/:id",
  async (req: Request<{ id: number }>, res: Response) => {
    // Delete a booking by id
  }
);