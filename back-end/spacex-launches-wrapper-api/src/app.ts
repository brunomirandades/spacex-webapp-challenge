import express from 'express';
import rateLimit from 'express-rate-limit';
import launchRoutes from './routes/launch.routes';
import cors from "cors";

const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS

const app = express();
app.use(express.json());
app.use(cors({
    origin: allowedOrigins,
}));

// Apply basic rate limiting: 1 request per minute
const limiter = rateLimit({
    windowMs: 60 * 1000,
    max: 1,
    message: { error: 'Too many requests, please try again later.' },
});

app.use(limiter);
app.use('/launches', launchRoutes);

export default app;