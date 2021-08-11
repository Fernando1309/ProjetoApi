import { Router } from "express";
import UsuarioController from "./app/controllers/UsuarioController";
import AuthUsuario from "./app/controllers/AuthController";

const router = Router();
router.post('/Usuario', UsuarioController.Create);
router.get('/Usuario', UsuarioController.FindAll);
router.post('/UsuarioAuth', AuthUsuario.UsuarioAuth);


export { router }