import bcrypt from 'bcryptjs';

// export async function passwordCheck(passFromWeb, passStoredInDb) {
//   // Simply compare the two passwords as strings
//   const isMatch = passFromWeb === passStoredInDb;
//   return isMatch;
// }

export const passwordCheckHashed = async (inputPassword, storedHash) => {
  try {
    return await bcrypt.compare(inputPassword, storedHash);
  } catch (err) {
    console.error("Error comparing hashed passwords:", err);
    throw err;
  }
};

export async function hashPassword(password) {
  const saltRounds = 6;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}