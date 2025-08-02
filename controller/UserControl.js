import { users } from "../utils/db.js";
import { validateUser } from "../models/user.model.js";
import { v4 as uuid } from "uuid";

export const getUsers = (req, res) => {
  res.json({ users });
};

export const getUserById = (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

export const createUser = (req, res) => {
  if (!validateUser(req.body))
    return res.status(400).json({ error: "Invalid user data" });
  const user = { id: uuid(), ...req.body };
  users.push(user);
  res.status(201).json(user);
};

export const updateUser = (req, res) => {
  const index = users.findIndex((u) => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "User not found" });
  if (!validateUser(req.body))
    return res.status(400).json({ error: "Invalid user data" });
  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
};

export const deleteUser = (req, res) => {
  const index = users.findIndex((u) => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "User not found" });
  const deleted = users.splice(index, 1);
  res.json(deleted[0]);
};
