import { Router } from "express";
import UsuarioR from './Usuario';
import UsuarioAuthR from "./UsuarioAuth"

const routes = Router();
routes.use('/Usuario', UsuarioR);
routes.use('/UsuarioAuth', UsuarioAuthR);

export default routes;
