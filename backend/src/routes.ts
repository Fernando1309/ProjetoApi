import { Router } from "express";
import UsuarioController from "./app/controllers/UsuarioController";
import AuthUsuario from "./app/controllers/AuthController";
import authMiddleware from "./app/middleware/authMiddaleware";

const router = Router();
router.post('/Usuario', UsuarioController.Create);
router.get('/Usuario', UsuarioController.FindAll);
router.post('/UsuarioAuth', AuthUsuario.UsuarioAuth);
router.get('/UsuarioLogin', authMiddleware, UsuarioController.login)


export { router }
