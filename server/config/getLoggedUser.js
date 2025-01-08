import { pool } from '../config/db.js'

export const getLoggedUser = async (email) => {

  try {
    // Await the query execution and access the result
    const [rows] = await pool.query(
      `SELECT first_name, last_name FROM users WHERE email = ?`, [email]
    );
    console.log(rows)
    if (rows.length > 0) {
      const { first_name: firstName, last_name: lastName } = rows[0];  // Destructure the first row
      return { firstName, lastName };
    } else {
      console.log('No user found with that email');
      return { firstName: null, lastName: null };
    }
  } catch (error) {
    console.error('Error fetching user name:', error);
    return { firstName: null, lastName: null };
  }
}
