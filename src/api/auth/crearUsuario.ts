import ValidationError from "../../http/ValidationError";

export interface Usuario {
    email: string,
    clave: string
}

export const crearUsuario = async (usuario: Usuario): Promise<undefined> => new Promise(
    (resolve, reject) => {
        throw new ValidationError(["Correo ya existente.", "Contraseña insegura."]);
    }
)
