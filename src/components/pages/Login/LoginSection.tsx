import React, { useState } from 'react';
import styled from "styled-components";
import { deviceMax } from "../../../styles/deviceSizes";
import Title from './Title';
import LoginForm from './LoginForm';
import Link from '../../organisms/login/Link';
import ServerValidationErrorAlert from '../../organisms/login/ServerValidationErrorAlert';


const LoginSection = () => {
    const [serverFailedValidations, setServerFailedValidations] = useState([] as string[]);

    return (
        <WrapperLogin className="p-4 p-md-5">
            <div className="d-flex">
                <TitleContainer className="w-100">
                    <Title className="mb-4">Inicio de Sesión</Title>
                </TitleContainer>
            </div>
            
            {serverFailedValidations && serverFailedValidations.length != 0 && <ServerValidationErrorAlert serverFailedValidations={serverFailedValidations} />}

            <LoginForm setServerFailedValidations={setServerFailedValidations} />
            <p className="text-center">¿Aún no es miembro? <Link data-toggle="tab" href="/registro">Regístrese</Link></p>
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

export default LoginSection;