import express from 'express';
import config from 'config';
import morgan from 'morgan';
import logger from './middlewares/logger.js';

const app = express();

const PORT = config.get('port');

app.use(morgan('combined'));
app.use(logger);
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    data: [],
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
