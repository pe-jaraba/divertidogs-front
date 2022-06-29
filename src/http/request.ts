import axios, { AxiosError } from 'axios';
import ValidationError from './ValidationError';
import ServerError from './ServerError';

interface ServerErrorBody {
    errorMessage?: string,
    validationErrors: Array<string>
}

const handleError = (error: any) => {
    if(axios.isAxiosError(error)){
        const axiosError = error as AxiosError;
        if(axiosError.response){
            const errorResponse = axiosError.response.data as ServerErrorBody;
            if(errorResponse.errorMessage){
                console.log("Server error: " + errorResponse.errorMessage);
                throw new ServerError(errorResponse.errorMessage); 
            }
            if(errorResponse.validationErrors) throw new ValidationError(errorResponse.validationErrors);
        }
    } else {
        const err = error as Error;
        console.log("Unknown error: " + err);
        throw new ServerError(err.message);
    }
}

const get = async <BodyType>(url: string): Promise<BodyType | undefined> => {
    try {
        const response = await axios.get(url);
        if(response.data){
            return Promise.resolve(response.data as BodyType);
        } else {
            Promise.reject(new Error("No data recieved from GET request"));
        }
    } catch(error){
        handleError(error);
    }
}

const post = async <RequestBodyType, ResponseBodyType = void>(url: string, body: RequestBodyType): Promise<ResponseBodyType | undefined> => {
    try {
        const response = await axios.post(url, body);
        if(response.data){
            return Promise.resolve(response.data as ResponseBodyType);
        } else {
            throw new Error("No data recieved from POST request");
        }
    } catch(error){
        handleError(error);
    }
}