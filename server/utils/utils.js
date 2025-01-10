import bcrypt from 'bcrypt';

export async function passwordCheck(passFromWeb, passStoredInDb) {
  // Simply compare the two passwords as strings
  const isMatch = passFromWeb === passStoredInDb;
  return isMatch;
}


// export const passwordCheck = async (inputPassword, storedHash) => {
//   try {
//     return await bcrypt.compare(inputPassword, storedHash);
//   } catch (err) {
//     console.error("Error comparing passwords:", err);
//     throw err;
//   }
// };

export async function hashPassword(password) {
  const saltRounds = 6;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}