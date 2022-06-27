import { InputGroupEntry } from "./FormInputGroup";

export interface InputState {
    value: string,
    isValid: boolean,
    wasTouched: boolean
}

export interface FormState {
    [key: string]: InputState
}

export const isFormValid = (_formState: FormState) => Object.keys(_formState)
                                    .map((key) => _formState[key].isValid)
                                    .reduce((prevIsValid, currentIsValid, index, arr) => prevIsValid && currentIsValid)


export const initializeFormState = (entries: Array<InputGroupEntry>) => { 
    const stateEntries = entries.map((entry) => { return [entry.name, {value:"", isValid:false, wasTouched:false} as InputState ]});
    return Object.fromEntries(stateEntries) as FormState;
}