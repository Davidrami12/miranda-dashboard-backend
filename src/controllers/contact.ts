import express from "express";
import { ContactInterface } from "../models/contact";
import { getContactService, getContactsService } from "../services/contact";

//GET all contacts
export const getContacts = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getContactsService(req, res);
    res.status(200).json(JSON.parse(response));
    
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

//GET contact by id
export const getContact = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getContactService(req, res);
    res.status(200).json(response);

  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};