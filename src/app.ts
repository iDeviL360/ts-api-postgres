import express, { Application, json, urlencoded } from 'express';
import path from "path";
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/user.routes';
import taskRoutes from './routes/task.routes';


const app: Application = express();


//Environment Variables
dotenv.config();



//Settings
app.set("port", process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());



//Middlewares
app.use(morgan("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));



//Routes
app.use(userRoutes);
app.use(taskRoutes);



export default app;