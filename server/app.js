import express from "express";
const app = express();
app.use(express.json()); // find ud af hvad den gør 

import cors from "cors"; //in top of all import routes
app.use(cors()); // run frontend and backend on same localhost

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