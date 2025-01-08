import express from 'express';
import path from 'path';

import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const router = express.Router();

router.get("/:fileName", async (req, res) => {
  const { fileName } = req.params;

  // Prevent path traversal by sanitizing the file name
  const safeFileName = path.basename(fileName);

  const filePath = path.resolve(__dirname, '../uploads', safeFileName);
  try {
    res.download(filePath, (err) => {
      if (err) {
        console.log("Error downloading file:", err);
        res.status(500).send("Error downloading file.");
      }
    });
  } catch (error) {
    console.log("Error from backend in downloading file", error);
    res.status(500).send("Internal server error");
  }
});

export default router;
