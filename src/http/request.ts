import axios, { AxiosError } from 'axios';
import ValidationError from './ValidationError';
import ServerError from './ServerError';
import AuthError from './AuthError';
import Cookies from 'js-cookie';

const JWT_DIVERTIDOGS_COOKIE: string = 'HNrG8!nX_^67~xJ?';


interface ServerErrorBody {
    mensaje?: string,
    erroresValidacion: Array<string>
}

const handleError = (error: any) => {
    if (axios.isAxiosError(error)) {
        console.log('handleError is axios error')
        const axiosError = error as AxiosError;
        if (axiosError.response) {
            console.log('handleError has response')
            const errorResponse = axiosError.response.data as ServerErrorBody;
            if (errorResponse.mensaje) {
                if (axiosError.response.status === 401) {
                    throw new AuthError(errorResponse.mensaje);
                }
                throw new ServerError(errorResponse.mensaje);
            }
            if (errorResponse.erroresValidacion && errorResponse.erroresValidacion.length !== 0) throw new ValidationError(errorResponse.erroresValidacion);
            if(axiosError.response.status === 401) throw new AuthError(axiosError.message)
            throw new ServerError(axiosError.message)
        } else {
            throw new ServerError(axiosError.message);
        }
    } else {
        const err = error as Error;
        throw new ServerError(err.message);
    }
}

export const get = async <BodyType>(url: string, withAuth: boolean = true): Promise<BodyType | undefined> => {
    try {
        let response = null;

        if (withAuth) {
            const token = Cookies.get(JWT_DIVERTIDOGS_COOKIE);
            response = await axios.get(url, { headers: { "Authorization": `Bearer ${token}` } });
        } else {
            response = await axios.get(url);
        }

        if (response.data) {
            return Promise.resolve(response.data as BodyType);
        } else {
            Promise.reject(new Error("No data recieved from GET request"));
        }

    } catch (error) {
        console.log('requests get catched')
        handleError(error);
    }
}

export const post = async <RequestBodyType, ResponseBodyType = void>(url: string, body: RequestBodyType, withAuth: boolean = true): Promise<ResponseBodyType | undefined> => {
    try {
        let response = null;

        if (withAuth) {
            const token = Cookies.get(JWT_DIVERTIDOGS_COOKIE);
            response = await axios.post(url, body, { headers: { "Authorization": `Bearer ${token}` } });
        } else {
            response = await axios.post(url, body);
        }

        if (response.data && response.status === 200) {
            return Promise.resolve(response.data as ResponseBodyType);
        } else {
            throw new Error("No data recieved from POST request");
        }

    } catch (error) {
        handleError(error);
    }
}