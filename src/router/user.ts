import express, { Router } from "express";
import { getUsers } from "../controller/userController.js";

const userRouter: Router = express.Router();
userRouter.get("/all", getUsers);

export { userRouter };
