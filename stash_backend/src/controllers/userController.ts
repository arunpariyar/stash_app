import { Request, Response } from 'express';
import prisma from '../config/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import CONFIG from '../config/config';
import utility from '../utilities/utility';

const signToken = (id: string) => {
  return jwt.sign({ id }, CONFIG.JWT_SECRET, {
    expiresIn: CONFIG.JWT_EXPIRES,
  });
};

const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        error: true,
        message: 'Name, email and password is mandatory',
      });
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return res.status(400).json({
        error: true,
        message: 'User already exist with given email address',
      });
    }

    //hash password with cost of 12
    const hashPassword = await bcrypt.hash(password, 12);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
        passwordChangedAt: new Date(),
      },
    });

    const token = signToken(newUser.id);

    res.status(200).json({
      error: false,
      token,
      data: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.password,
      },
    });
  } catch (error) {
    res.status(400).json({ error: true, message: error });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    //check to make sure that email and password is provided
    if (!email || !password) {
      return res.status(400).json({
        error: true,
        message: 'Please provide both email and password properly',
      });
    }
    //use email to find the user
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    //checking if there is no user and the password doesnt match at the sametime
    if (!user || !(await utility.validatePassword(password, user.password))) {
      return res.status(401).json({
        error: true,
        message: 'Given username or password is not valid',
      });
    }
    //send token to the client
    const token = signToken(user.id);

    res.status(200).json({
      error: false,
      token,
    });
  } catch (error) {
    res.status(400).json({
      error: true,
      message: error,
    });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      omit: { password: true },
    });

    console.log(users);

    if (!users) {
      return res.status(400).json({ error: true, message: 'no users found' });
    }

    res.status(200).json({
      error: false,
      data: users,
    });
  } catch (error) {
    res.status(400).json({
      error: true,
      message: error,
    });
  }
};

const userController = { signup, login, getAllUsers };

export default userController;
