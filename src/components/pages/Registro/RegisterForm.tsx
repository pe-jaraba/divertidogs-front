import React from 'react';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { FormInputGroup, InputGroupEntry } from '../../organisms/login/FormInputGroup';
import { initializeFormState } from '../../organisms/login/Form';
import FormGroup from '../../organisms/login/FormGroup';
import FormSubmitButton from '../../organisms/login/FormSubmitButton';


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

const RegisterForm = () => {
    const [validatedForm, setValidatedForm] = useState(false);
    const [formState, setFormState] = useState(initializeFormState(inputGroupsEntries));

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const form = event.currentTarget as HTMLFormElement;

        if (form.checkValidity() === false) {
            event.stopPropagation();
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
                <FormSubmitButton formState={formState} label="Guardar" />
            </FormGroup>
        </Form>
    );
}

export default RegisterForm;