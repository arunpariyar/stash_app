import bcrypt from 'bcrypt';
import CONFIG from '../config/config';
import jwt from 'jsonwebtoken';
import { promisify } from 'util';

async function validatePassword(
  givenPassword: string,
  userPassword: string
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, userPassword);
}

function changedPasswordAfter(iat: number, passwordChangedAt: number) {
  //divinding by 1000 to get the time from milliseconds to above
  const changedTimestamp: number = passwordChangedAt / 1000;
  return changedTimestamp > iat;
}

const utility = { validatePassword, changedPasswordAfter };

export default utility;
