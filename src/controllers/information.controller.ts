import { Router } from 'express';
import { information } from '../services/information.service';

export const infoController = Router();

infoController.get('', (req, res) => {
  res.status(200).json(information());
});