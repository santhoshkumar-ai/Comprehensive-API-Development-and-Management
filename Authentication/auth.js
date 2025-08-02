import jwt from "jsonwebtoken";

const SECRET = "SECRET_KEY_123";

export const generateToken = (user) => jwt.sign({ userId: user.id }, SECRET, { expiresIn: "1h" });

export const authenticate = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token required" });
  try {
    const decoded = jwt.verify(token, SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ error: "Invalid token" });
  }
};
