import Joi from "joi";

export const postBookingValidator = Joi.object({
  _id: Joi.string().max(100).optional(),
  userName: Joi.string().min(3).max(255).required(),
  userPicture: Joi.string().uri().required(),
  orderDate: Joi.date().min('2022-01-01').max('2022-12-31').required(),
  checkIn: Joi.date().min('2022-01-01').max('2022-12-31').required(),
  checkOut: Joi.date().min('2023-01-01').max('2023-12-31').required(),
  specialRequest: Joi.string().min(3).max(255).required(),
  roomType: Joi.string().valid('Single Bed', 'Double Superior', 'Suite').required(),
  status: Joi.string().valid('Check In', 'Check Out', 'In Progress').required()
});

export const updateBookingValidator = Joi.object({
  _id: Joi.string().max(100).optional(),
  userName: Joi.string().min(3).max(255).optional(),
  userPicture: Joi.string().uri().optional(),
  orderDate: Joi.date().min('2022-01-01').max('2022-12-31').optional(),
  checkIn: Joi.date().min('2022-01-01').max('2022-12-31').optional(),
  checkOut: Joi.date().min('2023-01-01').max('2023-12-31').optional(),
  specialRequest: Joi.string().min(3).max(255).optional(),
  roomType: Joi.string().valid('Single Bed', 'Double Superior', 'Suite').optional(),
  status: Joi.string().valid('Check In', 'Check Out', 'In Progress').optional()
});