import React, { useState } from 'react';
import styled from "styled-components";
import { deviceMax } from "../../../styles/deviceSizes";
import Title from './Title';
import RegisterForm from './RegisterForm';
import Link from '../../organisms/login/Link';
import Success from './Success';
import ServerValidationErrorAlert from '../../organisms/login/ServerValidationErrorAlert';


const RegisterSection = () => {
    const [wasSuccesful, setWasSuccesful] = useState(false);
    const [serverFailedValidations, setServerFailedValidations] = useState([] as string[]);

    if (wasSuccesful) {
        return (
            <WrapperRegister className="p-4 p-md-5">
                <Success />
            </WrapperRegister>
        );
    }
    return (
        <WrapperRegister className="p-4 p-md-5">
            <div className="d-flex">
                <TitleContainer className="w-100">
                    <Title className="mb-4">Registro de Cuenta</Title>
                </TitleContainer>
            </div>

            {serverFailedValidations && serverFailedValidations.length != 0 && <ServerValidationErrorAlert serverFailedValidations={serverFailedValidations} />}

            <RegisterForm setWasSuccesful={setWasSuccesful} setServerFailedValidations={setServerFailedValidations} />
            
            <p className="text-center">¿Ya es está registrado? <Link data-toggle="tab" href="/login">Inicie Sesión</Link></p>
        </WrapperRegister>
    );
}

const WrapperRegister = styled('div')`
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