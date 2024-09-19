import { Request, Response } from 'express';

const getAllTransactions = async (req: Request, res: Response) => {
  const transactions = [
    { id: 1, title: 'grocery', amount: 100 },
    { id: 2, title: 'mortgage', amount: 1000 },
  ];
  try {
    res.status(200).json({
      error: false,
      data: transactions,
    });
  } catch (error) {
    res.status(400).json({
      error: true,
      message: error,
    });
  }
};

const transactionsController = {
  getAllTransactions,
};

export default transactionsController;
