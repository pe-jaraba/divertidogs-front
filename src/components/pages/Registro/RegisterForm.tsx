import React from 'react';
import { Form  } from 'react-bootstrap';
import { useState } from 'react';
import { FormInputGroup, InputGroupEntry } from '../../organisms/login/FormInputGroup';
import { initializeFormState } from '../../organisms/login/Form';
import FormGroup from '../../organisms/login/FormGroup';
import FormSubmitButton from '../../organisms/login/FormSubmitButton';
import { crearUsuario } from '../../../services/authServicios';
import ValidationError from '../../../http/ValidationError';

const inputGroupsEntries: Array<InputGroupEntry> = [
    {
        id: "emailControl",
        type: "email",
        label: "Correo",
        name: "email",
        groupClassName: "mb-3",
        required: true,
        placeholder: "email@abc.com",
        validationHint: "Correo inválido."
    },
    {
        id: "passwordControl",
        type: "password",
        label: "Contraseña",
        name: "clave",
        groupClassName: "mb-3",
        required: true,
        placeholder: "contraseña",
        validationHint: "Contraseña inválida: mínimo 8 caracteres y un número.",
        pattern: "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
    },
    {
        id: "confirmPasswordControl",
        type: "confirm password",
        label: "Confirmar contraseña",
        name: "claveConfirmada",
        groupClassName: "mb-3",
        required: true,
        placeholder: "",
        validationHint: "Contraseña no coincide.",
        passwordInputName: "clave"
    }
]

interface RegisterFormProps {
    setWasSuccesful: Function,
    setServerFailedValidations: Function
}

const RegisterForm = ({ setWasSuccesful, setServerFailedValidations }: RegisterFormProps) => {
    const [validatedForm, setValidatedForm] = useState(false);
    const [formState, setFormState] = useState(initializeFormState(inputGroupsEntries));
    const [isLoading, setIsLoading] = useState(false);

    const register = async () => {
        setServerFailedValidations([] as string[]);
        setIsLoading(true);
        try {
            let response = await crearUsuario({email: formState.email.value, clave: formState.clave.value});
            setWasSuccesful(true);
        } catch(error){
            if(error instanceof ValidationError){
                setServerFailedValidations(error.getFailedValidations());
            }
            setWasSuccesful(false);
        }
        
        setIsLoading(false);
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const form = event.currentTarget as HTMLFormElement;

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
            register();
        }

        setValidatedForm(true);
    };

    const onInputChanged = ({ target }: any) => {
        const newInputState = { ...formState[target.name], value: target.value, isValid: target.checkValidity() };
        setFormState({ ...formState, [target.name]: newInputState });
    }

    const handleBlur = ({ target }: any) => {
        const newInputState = { ...formState[target.name], wasTouched: true };
        setFormState({ ...formState, [target.name]: newInputState });
    }

    return (
        <Form action="#" className="signin-form" noValidate validated={validatedForm} onSubmit={handleSubmit}>
            {
                inputGroupsEntries.map((entry) =>
                    <FormInputGroup id={entry.id}
                        key={entry.name + entry.id}
                        type={entry.type}
                        label={entry.label}
                        name={entry.name}
                        groupClassName={entry.groupClassName}
                        required={entry.required}
                        placeholder={entry.placeholder}
                        formState={formState}
                        onInputChange={onInputChanged}
                        onInputBlur={handleBlur}
                        validationHint={entry.validationHint}
                        passwordInputName={entry.passwordInputName}
                    />
                )
            }
            <FormGroup>
                <FormSubmitButton formState={formState} label="Guardar" isLoading={isLoading}/>
            </FormGroup>
        </Form>
    );
    
}

export default RegisterForm;