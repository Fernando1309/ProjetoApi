import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import { Usuario } from '../model/Usuario';
import bcrypt from 'bcryptjs';
import Jwt from "jsonwebtoken";

class AuthController {

  async UsuarioAuth(req: Request, res: Response) {
    const repository = getRepository(Usuario);
    const { email, senha } = req.body;
    const usuario = await repository.findOne({ where: { email } });

    if (!usuario) {
      return res.sendStatus(401);
    }

    const isSenhaValida = await bcrypt.compare(senha, usuario.senha);

    if (!isSenhaValida) {
      return res.sendStatus(401);
    }

    const token = Jwt.sign({ id: usuario.id }, 'secrete', { expiresIn: '1h' });

   delete usuario.senha;
    return res.json({
      usuario,
      token,
    })

  }

}
export default new AuthController();