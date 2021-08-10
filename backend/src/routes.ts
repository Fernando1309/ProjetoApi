import { Router } from "express";
import UsuarioController from "./app/controllers/UsuarioController";

const router = Router();
router.post('/Usuario', UsuarioController.Create);
router.get('/Usuario', UsuarioController.FindAll);

export { router }