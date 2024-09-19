import dotenv from 'dotenv';

dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';
export const PORT = process.env.PORT ? Number(process.env.PORT) : 1337;
export const JWT_SECRET =
  process.env.JWT_SECRET || 'and-thats-the-way-the-cookie-crumbles-local';

export const JWT_EXPIRES = '24h';

const CONFIG = {
  PORT,
  DEVELOPMENT,
  TEST,
  JWT_SECRET,
  JWT_EXPIRES,
};

export default CONFIG;
