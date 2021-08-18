// import express from 'express';
// import config from 'config';
// import morgan from 'morgan';
// import logger from './middlewares/logger.js';
// import universityRoutes from './routes/university.route.js';

const express = require('express');
// const config = require('config');
const morgan = require('morgan');
const logger = require('./middlewares/logger');
const universityRoutes = require('./routes/university.route');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(morgan('combined'));
app.use(logger);

app.use('/university', universityRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
