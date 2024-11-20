// actions/bcrypt.js

import bcrypt from "bcryptjs";

export function SaltAndHashPassword(password) {
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
}

export default SaltAndHashPassword;
