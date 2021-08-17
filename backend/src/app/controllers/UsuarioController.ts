import { Request, Response } from "express";
import { getRepository } from 'typeorm';
import { Usuario } from '../model/Usuario';

class UsuarioController {
  async login(req: Request, res: Response) {
    return res.send({userId: req.userId});
  }

  async FindAll(req: Request, res: Response) {

    const repository = getRepository(Usuario);
    const usuario = await repository.find();
    return res.send(usuario);
  };

  async Create(req: Request, res: Response) {
    const repository = getRepository(Usuario);
    const { nome, email, senha } = req.body;

    if (!nome) {
      return res.status(400).send('Usuario não informado!');
    }

    if (!email) {
      return res.status(400).send('E-mail não informado!');
    }

    if (!senha) {
      return res.status(400).send('Senha não informado!');
    }

    const UserExists = await repository.findOne({ where: { email } });

    if (UserExists) {
      return res.status(409).send('Já existe um Usuario cadastrado com o e-mail: ' + email);
    }

    const usuario = repository.create({ nome, email, senha });
    await repository.save(usuario);

    return res.send(usuario);
  }

}
export default new UsuarioController();