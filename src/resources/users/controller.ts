import { Request, Response, NextFunction } from 'express';
import User from './model';

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // use dummy data for now
    const users = ['John Doe', 'Jane Doe', 'John Smith', 'Jane Smith'];
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

export default {
  getAll,
};
