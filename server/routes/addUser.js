import express from 'express';
import { pool } from '../config/db.js';
import { hashPassword } from '../utils/utils.js';

const router = express.Router();

router.post("/", async (req, res) => {
  const { firstName, lastName, email, password, userAdmin } = req.body;

  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({ message: "Invalid user data." });
  }

  const checkUserQuery = `SELECT id FROM users WHERE email = ?`;
  const [existingUser] = await pool.query(checkUserQuery, [email]);
  if (existingUser.length > 0) {
    return res.status(409).json({ message: "User already exists." });
  }

  const hashedPassword = await hashPassword(password);

  try {
    const addUserQuery = `
    INSERT INTO users (first_name, last_name, email, password, admin)
    VALUES (?, ?, ?, ?, ?)
  `;
    const params = [firstName, lastName, email, hashedPassword, userAdmin];

    const [row] = await pool.query(addUserQuery, params);

    res.status(200).json({ row });
  } catch (error) {
    console.error("Add User - Database Error:", error);
    return res.status(500).json({ message: "Add User - Database update failed.", error: error.message });
  }
});

export default router;