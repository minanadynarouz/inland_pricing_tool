import express from 'express';
import multer from 'multer';
import date from 'date-and-time';
import xlsx from 'xlsx';
import { writeToDatabase } from '../config/writeToPortsTables.js';
import { getLoggedUser } from '../config/getLoggedUser.js';
import { pool } from '../config/db.js';
import { userMail } from './loginRoutes.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const now = new Date();
    const formatedDate = date.format(now, 'DD-MMM-YYYY HH-mm-ss');

    cb(null, formatedDate + ' - ' + file.originalname)
  }
})
const upload = multer({ storage });

const router = express.Router();
let data;
const allowedTables = ["alexandria", "damietta", "portsaid", "sokhna"];

router.post("/", upload.single('excelFile'), async (req, res) => {
  data = []
  const fileName = req.file.filename;
  const filePath = req.file.path;
  let userEmail = userMail;
  //function get username and last name
  const { firstName, lastName } = await getLoggedUser(userEmail);
  console.log('First Name:', firstName);
  console.log('Last Name:', lastName);
  const userName = `${firstName} ${lastName}`;
  const uploadTime = new Date();
  const workbook = xlsx.readFile(filePath);
  const Sheets = workbook.SheetNames;


  // Save metadata to excel_uploads_history table in DB
  try {
    await pool.execute(
      "INSERT INTO excel_uploads_history (file_name, file_path, upload_time, user) VALUES (?, ?, ?, ?)",
      [fileName, filePath, uploadTime, userName]
    );
    console.log(`File metadata saved: ${fileName}`);
  } catch (error) {
    console.error("Error saving file metadata:", error);
    return res.status(500).json({ error: "Failed to save file Metadata" });
  }

  //Process the file data itself into DB

  for (let i = 0; i < Sheets.length; i++) {
    // Get Sheet name
    const sheet = workbook.Sheets[Sheets[i]];
    let sheetName = Sheets[i].toLowerCase();

    // Avoid sql injection by whitelisting table names.
    if (!allowedTables.includes(sheetName)) {
      return res.status(500).json({ error: 'Invalid Table (port) name' });
    }

    //Truncate Table before inserting new data to ensure Database updated with last prices.
    try {
      await pool.execute(`TRUNCATE TABLE ${sheetName};`);
      console.log(`Table ${sheetName} truncated successfully`);

    } catch (error) {
      console.error(`Error truncating table ${sheetName}:`, error);
      return res.status(500).json({ error: `Failed to Truncate table ${sheetName}` });
    }
    // Store table in data array
    data.push(xlsx.utils.sheet_to_json(sheet, { header: 1 }));
  }

  console.log(fileName);
  for (let table = 0; table < data.length; table++) {
    for (let row = 1; row < data[table].length; row++) {
      let mainPortName = Sheets[table].toLowerCase();

      await writeToDatabase(data[table][row], mainPortName);
    }
  }

  res.status(200).json({ message: "File uploaded successfully" })
})

export default router;

