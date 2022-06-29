import React from 'react';
import styled from 'styled-components';
import { Stack, Button } from 'react-bootstrap';

const SuccessTitle = styled("h3")`
    line-height: 1.5;
    font-weight: 600;
    font-family: ${props => props.theme.fontPrimary},Arial, sans-serif;
    color: ${props => props.theme.colors.success};
`

const TitleContainer = styled('div')`
    text-align: center;
`

const CheckIconSection = styled("div")`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.success};
`

function Success() {
    return (
        <Stack gap={3}>
            <CheckIconSection>
                <i className="fa fa-check-circle fa-5x" aria-hidden="true"></i>
            </CheckIconSection>
            <TitleContainer className="w-100">
                <SuccessTitle >¡Registro Exitoso!</SuccessTitle>
            </TitleContainer>
            <Button  variant="primary" href='/login'>Iniciar sesión</Button>
            <Button  variant="secondary" href='/registro'>Registrar otra cuenta</Button>
        </Stack>
    );
}
export default Success;