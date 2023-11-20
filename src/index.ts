import express from "express";
import { appRoutes } from "./interfaces/api/appRoutes";


const App = () => {
  
  const app = express();
  const port = 3005;
  
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  
  app.get("/", (req, res) => {
    res.send("Hello, world!");
  });
  
  app.use(appRoutes());
  
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
};

App();

