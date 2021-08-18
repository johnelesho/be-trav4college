import express from 'express';
import config from 'config';
import morgan from 'morgan';
import logger from './middlewares/logger.js';
import universityRoutes from './routes/university.route.js';

const app = express();

const PORT = config.get('port');

app.use(morgan('combined'));
app.use(logger);

app.use('/university', universityRoutes);
// app.get('/', (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: [],
//   });
// });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
