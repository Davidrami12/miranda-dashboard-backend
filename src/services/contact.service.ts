import express from "express";
import { ContactInterface } from "../models/Contact";
import { Contact } from "../schemas/contact.schema";

export const getContactsService = async () => {
  return await Contact.find({});
};

export const getContactService = async (id: string) => {
  const contact = await Contact.findById(id);
  if (!contact) throw new Error('Contact not found');
  return contact;
};