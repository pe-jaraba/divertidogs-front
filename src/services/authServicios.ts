import Cookies from 'js-cookie';

export interface RespuestaAuth {
    token: string;
}

const JWT_DIVERTIDOGS_COOKIE: string = 'HNrG8!nX_^67~xJ?';

export const guardarResultadoAuth = (respuestaAuth: RespuestaAuth) => {
    Cookies.set(JWT_DIVERTIDOGS_COOKIE, respuestaAuth.token);
}

export const limpiarInformacionAuth = () => {
    Cookies.remove(JWT_DIVERTIDOGS_COOKIE);
}

export const authEsValida = async (): Promise<Boolean> => new Promise (
    (resolve, reject) => {
        resolve(true);
    }
);