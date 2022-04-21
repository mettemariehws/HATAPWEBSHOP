import express from "express";
const app = express();
app.use(express.json()); // find ud af hvad den gør 

import cors from "cors"; //in top of all import routes
app.use(cors()); // run frontend and backend on same localhost

import helmet from "helmet";
app.use(helmet());

import rateLimit from 'express-rate-limit';

const baseLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});


app.use(baseLimiter);

//server min Svelte
import path from "path";
app.use(express.static(path.resolve("../client/public"))); // this is servering my svelte 

import session from "express-session";
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

import loginRouter from "./router/loginRouter.js";
app.use(loginRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("The server is running on port", PORT);
});