export const login = (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "password") {
    const token = generateToken({ id: "admin" });
    return res.json({ token });
  }
  res.status(401).json({ error: "Invalid credentials" });
};
