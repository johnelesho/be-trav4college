// import express from 'express';
// import { getAllUniversity } from '../controllers/Universities.controller.js';

const express = require('express');
const { getAllUniversity } = require('../controllers/Universities.controller');
const universityRoutes = express.Router();

universityRoutes.get('/', getAllUniversity);

module.exports = universityRoutes;
