import express from 'express';
import { pool } from '../config/db.js'
import { passwordCheck } from '../utils/utils.js';
import { body, validationResult } from 'express-validator';

const router = express.Router();
export let userMail;

router.post("/", [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 6 }).notEmpty().withMessage('Password must be at least 6 characters long')
],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    const q = "SELECT * FROM users WHERE email = ?";
    const [data] = await pool.query(q, [email]);

    if (data.length === 0) {
      return res.status(401).json({ success: false, message: "Invalid email" });
    }

    // Compare password hashes
    try {
      const isMatch = await passwordCheck(password, data[0].password);

      if (isMatch) {
        //Save mail to session to retreive in another route
        // req.session.email = email;
        userMail = email;

        console.log("Mail from login route: ", userMail)
        // returning admin value if true or false as this will affect the UI functions
        return res.status(200).json({ success: true, user: data[0]['admin'] });
      } else {
        return res.status(401).json({ success: false, message: "Invalid email or password" });
      }
    } catch (err) {
      console.error("Error comparing passwords:", err);
      return res.status(500).json({ error: "Error comparing password" });
    }
  });

export default router;
