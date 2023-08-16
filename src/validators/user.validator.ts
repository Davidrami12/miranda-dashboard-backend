import Joi from "joi";

export const postUserValidator = Joi.object({
  _id: Joi.string().max(100).optional(),
  photo: Joi.string().uri().required(),
  name: Joi.string().min(3).max(255).required(),
  position: Joi.string().min(3).max(255).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/91 \d{3} \d{2} \d{2}/).required(),
  date: Joi.date().min('2022-01-01').max('2023-12-31').required(),
  description: Joi.string().min(3).max(255).required(),
  state: Joi.string().valid('ACTIVE', 'INACTIVE').required(),
  pass: Joi.string().alphanum().min(8).required()
});

export const updateUserValidator = Joi.object({
  _id: Joi.string().max(100).optional(),
  photo: Joi.string().uri().optional(),
  name: Joi.string().min(3).max(255).optional(),
  position: Joi.string().min(3).max(255).optional(),
  email: Joi.string().email().optional(),
  phone: Joi.string().pattern(/91 \d{3} \d{2} \d{2}/).optional(),
  date: Joi.date().min('2022-01-01').max('2023-12-31').optional(),
  description: Joi.string().min(3).max(255).optional(),
  state: Joi.string().valid('ACTIVE', 'INACTIVE').optional(),
  pass: Joi.string().alphanum().min(8).optional()
});