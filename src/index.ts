import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import { appRoutes } from "./interfaces/api/appRoutes";
import { env } from  "../src/infra/setup/env";


const App = () => {
  
  const app = express();
  const PORT = env.port;

  // console.log("PORT: ", PORT);
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.get("/", (req, res) => {
    res.send("Hello, world!");
  });
  
  app.use(appRoutes());
  
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
};

App();

