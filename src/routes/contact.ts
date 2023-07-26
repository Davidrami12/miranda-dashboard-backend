import express from 'express';
import { getContact, getContacts } from '../controllers/contact';

export const contactRoutes = express.Router();

//GET all contacts
contactRoutes.get('/', getContacts);

//GET single contact
contactRoutes.get('/:id', getContact);