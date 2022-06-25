import React from 'react';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import Button from './Button';
import Label from './Label';
import FormControl from './FormControl';

const RegisterForm = () => {
    return (
        <Form action="#" className="signin-form">
            <GrupoFormulario className="mb-3">
                <Label className="label" htmlFor="name">Email</Label>
                <FormControl type="email" placeholder="email@abc.com" required />
            </GrupoFormulario>
            <GrupoFormulario className="mb-3">
                <Label className="label" htmlFor="password">Contraseña</Label>
                <FormControl type="password" placeholder="contraseña" required />
            </GrupoFormulario>
            <GrupoFormulario className="mb-3">
                <Label className="label" htmlFor="password">Repetir Contraseña</Label>
                <FormControl type="password" placeholder="contraseña" required />
            </GrupoFormulario>
            <GrupoFormulario>
                <Button type="submit" variant="primary" className="form-control btn rounded submit px-3">Guardar</Button>
            </GrupoFormulario>
        </Form>
    );
}

const GrupoFormulario = styled(Form.Group)`
    position: relative;
`

export default RegisterForm;