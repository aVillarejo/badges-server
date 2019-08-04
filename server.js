import express from 'express';
import morgan from 'morgan';
import './database';

//* App
const app = express();

//* App Settings
app.set('PORT', process.env.PORT || 5000);
const env = process.env.NODE_ENV;

//* App Middlewares
app.use(morgan('dev'));
app.use(express.json());

//* Routes
app.get('/api', (req, res) => {
  res.send('Hello World!!');
});
app.use('/api/badges', require('./routes/badge.routes'));

//* Starting de Server
app.listen(app.get('PORT'), () => {
  console.log(`Server running on port ${app.get('PORT')} 🔥`);
  console.log(`NODE_ENV: ${env}`);
});
