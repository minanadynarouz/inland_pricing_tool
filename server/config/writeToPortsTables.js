import { pool } from '../config/db.js';

export const writeToDatabase = async (data, sheetName) => {
  // Sanitize table name
  const tableName = sheetName.replace(/[^a-zA-Z0-9_]/g, '');

  try {
    // Step 1: Define the INSERT query with placeholders
    const insertIntoTable = `
      INSERT INTO ${tableName} (places, dry_20, dry_40, dry_even_20, Reefer)
      VALUES (?, ?, ?, ?, ?)
      ON DUPLICATE KEY UPDATE
      dry_20 = VALUES(dry_20),
      dry_40 = VALUES(dry_40),
      dry_even_20 = VALUES(dry_even_20),
      Reefer = VALUES(Reefer)
    `;

    // Step 2: Prepare values for the placeholders
    const values = [
      data[0] || 'unknown', // places
      data[1] == null ? 0 : data[1], // dry_20
      data[2] == null ? 0 : data[2], // dry_40
      data[3] == null ? 0 : data[3], // dry_even_20
      data[4] == null ? 0 : data[4], // reefer
    ];

    // Step 3: Execute the INSERT query
    await pool.execute(insertIntoTable, values);
    // console.log(`Row inserted into ${tableName}`);
  } catch (err) {
    console.error(`Error processing table ${tableName}:`, err);
    return res.status(500).json({ error: `Failed to Inert into table ${tableName}` });
  }
};
