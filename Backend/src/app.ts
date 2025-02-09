import express from "express";
import teamRoutes from "../routes/teamRoutes.js";
import connectDB from "../config/db.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;
connectDB();

const app = express();

app.use(express.json());

app.use("/api/teams", teamRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
