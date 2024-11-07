import express, { Application, Request, Response } from "express";
import dotenv from "dotenv"
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config();

const app:Application=express()
const PORT:number= Number(process.env.PORT) || 1001
const allowedOrigin = process.env.CLIENT_URL;

const corsOptions = {
    origin: allowedOrigin,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  };
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors(corsOptions));




app.use("*", (req: Request, res: Response) => {
    res
      .status(404)
      .json({ success: false, status: 404, message: "Api Not Found " });
  });
  app.listen(PORT, () => {
    console.log(`mongodb connected successfully on this ${PORT}`);
  });
  
  export default app;