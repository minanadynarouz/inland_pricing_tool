import express from 'express';
import { pool } from '../config/db.js';

const router = express.Router();

router.post("/", async (req, res) => {
  const { containerType, seaPort, place } = req.body;

  const mappedContainerTypes = {
    "1*20'ST": "dry_20",
    "1*40'ST": "dry_40",
    "2*20'ST": "dry_even_20",
    "1*20'RF": "reefer",
    "1*40'RF": "reefer",
  };

  const mappedValue = mappedContainerTypes[containerType];

  if (!mappedValue || !seaPort || !place) {
    return res.status(400).json({ message: "Invalid input data." });
  }

  try {
    const query = "SELECT ?? FROM ?? WHERE places = ?";
    const params = [mappedValue, seaPort.toLowerCase(), place];

    const [row] = await pool.query(query, params);
    const price = row[0][mappedValue]

    res.status(200).json({ price });
  } catch (error) {
    console.error("Database Error:", error);
    res.status(500).json({ message: "Database query failed.", error });
  }
});

export default router;
