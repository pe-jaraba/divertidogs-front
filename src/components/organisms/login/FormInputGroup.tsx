import React from 'react';
import { Form } from 'react-bootstrap';
import { FormState } from './Form';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import FormControl from './FormControl';

interface FormInputGroupProps {
    id: string,
    type: "text" | "password" | "email" | "confirm password",
    label: string,
    name: string,
    groupClassName: string,
    required: boolean,
    placeholder: string,
    formState: FormState,
    onInputChange: Function,
    onInputBlur: Function,
    validationHint: string,
    passwordInputName?: string
    pattern?: string
}

export interface InputGroupEntry {
    id: string,
    type: "text" | "password" | "email" | "confirm password",
    label: string,
    name: string,
    groupClassName: string,
    required: boolean,
    placeholder: string,
    validationHint: string,
    passwordInputName?: string
    pattern?: string
}

const calculatePattern = (props: FormInputGroupProps) => {
    if (props.pattern) return props.pattern

    if (props.type === "confirm password") {
        console.log(props.formState);
        if (!props.passwordInputName) {
            throw new Error("invalid passwordInputName for confirm password input group");
        }
        const passwordPattern = props.formState[props.passwordInputName].value;

        return passwordPattern;
    }

    return undefined;
}

export function FormInputGroup(props: FormInputGroupProps) {
    return (
        <FormGroup className={props.groupClassName} controlId={props.id} key={props.name + props.id}>
            <FormLabel className="label" >{props.label}</FormLabel>
            <FormControl type={props.type === "confirm password" ? "password" : props.type}
                name={props.name}
                placeholder={props.placeholder}
                required
                value={props.formState[props.name].value}
                onChange={props.onInputChange}
                onBlur={props.onInputBlur}
                pattern={calculatePattern(props)}
                isValid={props.formState[props.name].isValid && props.formState[props.name].wasTouched}
                isInvalid={!props.formState[props.name].isValid && props.formState[props.name].wasTouched} />
            <Form.Control.Feedback type="invalid">{props.validationHint}</Form.Control.Feedback>
        </FormGroup>
    );
}
