import express, { Application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import { notFound, errorHandler } from './middlewares/errorMiddleware';

const app: Application = express();

// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

export default app;
