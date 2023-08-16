import Joi from "joi";

export const postRoomValidator = Joi.object({
  _id: Joi.string().max(100).optional(),
  room_number: Joi.number().integer().required(),
  photo: Joi.string().uri().required(),
  photoTwo: Joi.string().uri().required(),
  photoThree: Joi.string().uri().required(),
  photoFour: Joi.string().uri().required(),
  description: Joi.string().min(10).required(),
  discountPercent: Joi.number().integer().required(),
  discount: Joi.boolean().required(),
  cancellationPolicy: Joi.string().min(10).required(),
  bed_type: Joi.string().valid('Single', 'Double', 'Suite').required(),
  room_facilities: Joi.array().items(Joi.string()).required(),
  room_rate: Joi.number().integer().min(1).max(99).required(),
  room_offer: Joi.boolean().required(),
  room_status: Joi.string().valid('Available', 'Booked').required()
});

export const updateRoomValidator = Joi.object({
  _id: Joi.string().max(100).optional(),
  room_number: Joi.number().integer().optional(),
  photo: Joi.string().uri().optional(),
  photoTwo: Joi.string().uri().optional(),
  photoThree: Joi.string().uri().optional(),
  photoFour: Joi.string().uri().optional(),
  description: Joi.string().min(10).optional(),
  discountPercent: Joi.number().integer().optional(),
  discount: Joi.boolean().optional(),
  cancellationPolicy: Joi.string().min(10).optional(),
  bed_type: Joi.string().valid('Single', 'Double', 'Suite').optional(),
  room_facilities: Joi.array().items(Joi.string()).optional(),
  room_rate: Joi.number().integer().min(1).max(99).optional(),
  room_offer: Joi.boolean().optional(),
  room_status: Joi.string().valid('Available', 'Booked').optional()
});