import express from "express";
import { addContactMessage } from "../controllers/contactController.js";

const contactRouter = express.Router();

contactRouter.post("/add", addContactMessage);

export default contactRouter;
