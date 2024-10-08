import express from "express";
// import helmet from "helmet";
import cors from "cors";

import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import { notFound, errorHandler } from "./middleware/errorMiddleware";

const app = express();

const client = require("./redisClient");
const session = require("express-session");
const RedisStore = require("connect-redis").default;

let redisStore = new RedisStore({
  client: client,
});
app.use(
  session({
    store: redisStore,
    secret: "blueberry juice",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      sameSite: "Strict",
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: false,
      domain: ".localhost",
    },
  })
);

// app.use(helmet());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());

// Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

export default app;
