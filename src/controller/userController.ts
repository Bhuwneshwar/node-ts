import { NextFunction, Request, Response } from "express";

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  const users: string[] = ["hi", "by", "noe"];
  res.send({ users });
};
