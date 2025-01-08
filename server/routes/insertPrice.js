import express from 'express';
import { pool } from '../config/db.js';

const router = express.Router();

router.post("/", async (req, res) => {
  const { containerType, seaPort, place, price } = req.body;

  const mappedContainerTypes = {
    "1*20'ST": "dry_20",
    "1*40'ST": "dry_40",
    "2*20'ST": "dry_even_20",
    "1*20'RF": "reefer",
    "1*40'RF": "reefer",
  };

  const mappedValue = mappedContainerTypes[containerType];

  if (!mappedValue || !seaPort || !place || !price) {
    return res.status(400).json({ message: "Invalid input data." });
  }

  try {
    const updateQuery = "UPDATE ?? SET ?? = ? WHERE places = ?";
    const params = [seaPort.toLowerCase(), mappedValue, price, place];

    const [row] = await pool.query(updateQuery, params);

    res.status(200).json({ row });
  } catch (error) {
    console.error("Amend Price Lane - Database Error:", error);
    res.status(500).json({ message: "Amend Price Lane - Database update failed.", error });
  }
});

export default router;