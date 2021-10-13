import { Router } from "express";
import AuthUsuario from "../app/controllers/AuthController";

const UsuarioAuthR = Router();
UsuarioAuthR.post('/', AuthUsuario.UsuarioAuth);

export default  UsuarioAuthR;
