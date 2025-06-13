import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
// import { getUserSidebar } from "../controllers/message.controller";
import { getMessages, getUserSidebar,sendMessage } from "../controllers/message.controller.js";

const router = express.Router();


router.get("/users", protectRoute, getUserSidebar)
router.get("/:id", protectRoute, getMessages)

router.post("/send/:id", protectRoute, sendMessage)

export default router;