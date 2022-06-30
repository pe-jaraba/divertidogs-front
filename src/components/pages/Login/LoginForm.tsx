import React from 'react';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { FormInputGroup, InputGroupEntry } from '../../organisms/login/FormInputGroup';
import { initializeFormState } from '../../organisms/login/Form';
import FormGroup from '../../organisms/login/FormGroup';
import FormSubmitButton from '../../organisms/login/FormSubmitButton';
import { iniciarSesion } from '../../../api/auth/iniciarSesion';
import { useNavigate } from "react-router-dom";
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
        validationHint: "Contraseña inválida."
    }
]

interface LoginFormProps {
    setServerFailedValidations: Function
}

const LoginForm = ({ setServerFailedValidations }: LoginFormProps) => {
    const [validatedForm, setValidatedForm] = useState(false);
    const [formState, setFormState] = useState(initializeFormState(inputGroupsEntries));
    let navigate = useNavigate();

    const accionIniciarSesion = async () => {
        const email = formState["email"].value;
        const clave = formState["clave"].value;

        try {
            await iniciarSesion({ email, clave } );
            navigate("/inicio", { replace: true });
        } catch(error){
            if(error instanceof ValidationError){
                setServerFailedValidations(error.getFailedValidations());
            }
        }
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        const form = event.currentTarget as HTMLFormElement;

        event.preventDefault();

        if (form.checkValidity() === false) {
            event.stopPropagation();
        } else {
           accionIniciarSesion();
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
        <Form action="#" className="signin-form" noValidate onSubmit={handleSubmit} validated={validatedForm} >
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
                    />
                )
            }
            <FormGroup>
                <FormSubmitButton formState={formState} label="Entrar"/>
            </FormGroup>
        </Form>
    );
}

export default LoginForm;