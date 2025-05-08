import express from 'express';
import "dotenv/config";
const app = express();
import authRouter from './router/authRoute.js';
import bookigRouter from "./router/bookingRoute.js";
// import tableRouter from './router/tableRoute.js';
import orderRouter from './router/orderRoute.js';
// import menuRouter from './router/menuRoute.js';
import { setupSwagger } from './swagger/swagger.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const PORT = process.env.PORT || 7000;
// @ middlewares
app.use(cors({
    origin: true, // your frontend URL
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/booking", bookigRouter);
app.use("/api/v1/order", orderRouter);
// app.use("/api/v1/table",tableRouter);
// app.use("/api/v1/menu",menuRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
setupSwagger(app); // Setup Swagger documentation
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
