import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
interface TokenPayLoad {
  id: string;
  iat: number;
  exp: number;
}

export default function authMiddleware(req: Request, res: Response, next: NextFunction) {

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send('token de autenticação ausente.');
  }

  const token = authorization.replace('Bearer', '').trim();
  console.log(token);

  try {
    const data = jwt.verify(token, 'secrete');

    const { id } = data as TokenPayLoad;
    req.userId = id;
    return next();

  } catch {
    return res.status(401).send('falha no token de autenticação.');

  }



}
