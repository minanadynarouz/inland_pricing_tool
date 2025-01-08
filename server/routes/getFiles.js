import express from 'express';
import path from 'path';
import fs from 'fs';
import { pool } from '../config/db.js';


const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM excel_uploads_history ORDER BY id ASC;'
    )
    res.status(200).json(result[0]);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch files history from the database",
      error: error.message
    });
  }
});

export default router;