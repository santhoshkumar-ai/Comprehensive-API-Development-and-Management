import express from "express";
import { authenticate } from "../middleware/auth.js";
import { 
  getUsers, getUserById, createUser, updateUser, deleteUser, login 
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/login", login);
router.get("/users", authenticate, getUsers);
router.get("/users/:id", authenticate, getUserById);
router.post("/users", authenticate, createUser);
router.put("/users/:id", authenticate, updateUser);
router.delete("/users/:id", authenticate, deleteUser);

export default router;
