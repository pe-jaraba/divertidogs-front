import React from 'react';
import styled from "styled-components";
import { deviceMax } from "../../../styles/deviceSizes";
import Title from './Title';
import RegisterForm from './RegisterForm';
import Link from '../../organisms/login/Link';

const RegisterSection = () => {
    return (
        <WrapperLogin className="p-4 p-md-5">
            <div className="d-flex">
                <TitleContainer className="w-100">
                    <Title className="mb-4">Registro de Cuenta</Title>
                </TitleContainer>
            </div>
            <RegisterForm />
            <p className="text-center">¿Ya es está registrado? <Link data-toggle="tab" href="/login">Inicie Sesión</Link></p>
        </WrapperLogin>
    );
}

const WrapperLogin = styled('div')`
    position: relative;
    background: white;
    width: 50%;
	@media only screen and ${deviceMax.md}{
        width: 100%;
    }
    
`

const TitleContainer = styled('div')`
    text-align: center;
`

export default RegisterSection;