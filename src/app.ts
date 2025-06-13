import express, { Request, Response } from "express";
import cors from "cors";
import { router } from "./app/router/routes";
import mongoose from "mongoose";
import config from "./app/config/config";

const port = 5000;
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
app.use("/api/v1", router);

function main() {
  try {
    mongoose
      .connect(config.database_url as string)
      .then(() => console.log("Database connected successfully"));
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (e) {
    console.log("Database connection failed", e);
  }
}

main();
