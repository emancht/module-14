import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import router from './routes/api.js';

import {
  MAX_JSON_SIZE,
  PORT,
  REQUEST_LIMIT_NUMBER,
  REQUEST_LIMIT_TIME,
  URL_ENCODE,
  WEB_CACHE,
} from './app/config/config.js';

const app = express();

/// Security Apply
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(cookieParser());

/// Request Size Limit
app.use(express.json({ limit: MAX_JSON_SIZE }));

/// URL Encode
app.use(express.urlencoded({ extended: URL_ENCODE }));

/// Request Rate Limit
const limiter = rateLimit({
  windowMs: REQUEST_LIMIT_TIME,
  max: REQUEST_LIMIT_NUMBER,
});
app.use(limiter);

/// Web Cache
app.set('etag', WEB_CACHE);

/// MongoDB Connection
// mongoose.connect('mongodb://localhost:27017/test', {autoIndex: true})
/* mongoose
  .connect(MONGODB_URI, { autoIndex: true })
  .then(() => {
    console.log(`MongoDB Connected successfully...`);
  })
  .catch((err) => {
    console.log(`MongoDB Connection Error`, err);
  }); */

/// Add App Router
app.use('/api', router);

/// Run App
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
