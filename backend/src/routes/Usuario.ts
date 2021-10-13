import { Router } from "express";
import UsuarioController from "../app/controllers/UsuarioController";
import authMiddleware from "../app/middleware/authMiddaleware";

const UsuarioR = Router();
UsuarioR.post('/', UsuarioController.Create);
UsuarioR.get('/:nome', UsuarioController.FindAll);
UsuarioR.get('/Login', authMiddleware, UsuarioController.login)
export default UsuarioR;
