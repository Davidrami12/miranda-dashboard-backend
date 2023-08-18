import bcrypt from 'bcrypt';
import moment from 'moment';
import { faker } from '@faker-js/faker';


const saltRounds: number = 10;

// Functions to encrypt and compare passwords
export const encryptPassword = async (password: string): Promise<string> => {
  try {
    return await bcrypt.hash(password, saltRounds);

  }catch (error) {
    throw new Error("Error hashing password");
  }
}

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  try {
    return await bcrypt.compare(password, hash);

  } catch (error) {
    throw new Error("Error comparing password");
  }
}


// Functions to modify faker data and then implement on database
export const generateRandomFacilities = (arr: string[]) => {
  let shuffled = arr.slice(0), i = arr.length, min = Math.floor(Math.random() * i), temp, index;
  while (i--) {
    index = Math.floor((i + 1) * Math.random());
    temp = shuffled[index];
    shuffled[index] = shuffled[i];
    shuffled[i] = temp;
  }
  return shuffled.slice(min);
}

export const generateRandomDate = (startDate: string, endDate: string) => {
  const startTimestamp = moment(startDate, 'DD/MM/YYYY').valueOf();
  const endTimestamp = moment(endDate, 'DD/MM/YYYY').valueOf();

  const randomTimestamp = faker.date.between({ from: startTimestamp, to: endTimestamp });
  const randomDate = moment(randomTimestamp);

  return randomDate.format('YYYY-MM-DD');
}