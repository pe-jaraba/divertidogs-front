import Cookies from 'js-cookie';
import { post, get } from "../http/request";

export interface RespuestaAuth {
    token: string;
}

interface Credenciales {
    email: string,
    clave: string
}

const JWT_DIVERTIDOGS_COOKIE: string = 'HNrG8!nX_^67~xJ?';

const generarRuta = (endpoint: string) => {
    return `http://localhost:8080/${endpoint}`;
}

export const guardarResultadoAuth = (respuestaAuth: RespuestaAuth) => {
    Cookies.set(JWT_DIVERTIDOGS_COOKIE, respuestaAuth.token);
}

export const limpiarInformacionAuth = () => {
    Cookies.remove(JWT_DIVERTIDOGS_COOKIE);
}

export const iniciarSesion = async (credenciales: Credenciales): Promise<RespuestaUsuario| undefined> => {
    return post<Credenciales, RespuestaUsuario | undefined>(generarRuta('auth/login'), credenciales, false);
}


export interface Usuario {
    email: string,
    clave: string
}

export interface RespuestaUsuario {
    id: string,
    email: string,
    grupoUsuario: string,
    roles: Array<string>
}

export const crearUsuario = async (usuario: Usuario): Promise<RespuestaUsuario| undefined> => {
    return post<Usuario, RespuestaUsuario | undefined>(generarRuta('auth/registrar'), usuario, false);
}

export const infoUsuario = async  (): Promise<RespuestaUsuario| undefined> => {
    return get<RespuestaUsuario | undefined>(generarRuta('usuarios/yo'));
}

export const authEsValido = async (): Promise<Boolean> => {
    try {
        await infoUsuario();
        console.log('authEsValido awaited');
        return true;
    } catch (error){
        console.log('authEsValido catched');
        return false;
    }
}