import { Request, Response, NextFunction } from 'express';
import { IError } from '../interfaces';

export default function errorMiddleware(
  error:IError,
  _req:Request,
  res:Response,
  _next:NextFunction,
) {
  if (error.details) {
    const [err] = error.details;
    const { message } = err;
    const [code, codeMessage] = message.split('|');

    if (code && codeMessage) {
      return res.status(Number(code)).json({ message: codeMessage });
    }
    return res.status(500).json(message);
  }
  console.error(error);
}