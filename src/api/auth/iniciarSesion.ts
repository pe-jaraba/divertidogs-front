import axios from "axios";
import ValidationError from "../../http/ValidationError";
import { RespuestaAuth, guardarResultadoAuth } from "../../services/authServicios";

interface Credenciales {
    email: string,
    clave: string
}

export const iniciarSesion = async (credenciales: Credenciales): Promise<void> => new Promise(
    (resolve, reject) => {
        guardarResultadoAuth({token: "myToken"});
        resolve();
    }
)
