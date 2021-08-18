import express from 'express';
import { getAllUniversity } from '../controllers/Universities.controller.js';

const universityRoutes = express.Router();

universityRoutes.get('/', getAllUniversity);

export default universityRoutes;
