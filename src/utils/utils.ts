import bcrypt from 'bcrypt';

const saltRounds: number = 10;

export async function encryptPassword(password: string): Promise<string> {
  try {
    return await bcrypt.hash(password, saltRounds);

  }catch (error) {
    throw new Error("Error hashing password");
  }
}

export async function comparePassword(password: string, hash: string): Promise<boolean> {
  try {
    return await bcrypt.compare(password, hash);

  } catch (error) {
    throw new Error("Error comparing password");
  }
}
