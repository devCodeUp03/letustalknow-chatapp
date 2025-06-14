import express from "express";
import { protectRoute } from "../middlewares/protectRoute.middleware.js";
import { getMessages, getUsersForSlidebar, sendMessage } from "../controllers/message.controller.js";
const router = express.Router();

router.get("/users", protectRoute, getUsersForSlidebar);
router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage);

export default router;
