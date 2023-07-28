import fs from "fs";
import path from "path";
import express from "express";
import { ContactInterface } from "../models/Contact";
import uuid from "react-uuid";

const directory = path.join(__dirname, "..", "data", "contacts.json");
const readContacts = fs.readFileSync(directory, "utf8");
const contactsJson = JSON.parse(readContacts);

export const getContactsService = async (req: express.Request, res: express.Response) => {
  return readContacts; 
};

export const getContactService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const contactId = contactsJson.find((contact: ContactInterface) => contact.id == id);
  
  if (!contactId) {
    res.status(404).json({ message: "Contact not found" });
    return;
  }
  
  res.send(contactId);
};