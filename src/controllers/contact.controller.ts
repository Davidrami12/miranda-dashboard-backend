import express from "express";
import { ContactInterface } from "../models/Contact";
import { getContactService, getContactsService } from "../services/contact.service";

//GET all contacts
export const getContacts = async (req: express.Request, res: express.Response) => {
  try {
    const contacts = await getContactsService();
    res.status(200).json(contacts);
    
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

//GET contact by id
export const getContact = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const contact = await getContactService(id);
    res.status(200).json(contact);

  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};