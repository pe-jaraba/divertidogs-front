import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { deviceMaxHeight } from "../../../styles/deviceSizes";
import { ThemeProvider } from 'styled-components';
import { divertidogsTheme } from '../../../styles/divertidogs-theme';
import { authEsValido } from '../../../services/authServicios';
import { useNavigate } from "react-router-dom";



function Enrutador() {
    let navigate = useNavigate();

    useEffect(() => {
       const redirectAfterAuth = async () => {
            const isAuthed = await authEsValido();
            if(isAuthed){
                navigate("/inicio", { replace: true });
            } else {
                navigate("/login", { replace: true });
            }
       } 
    
      redirectAfterAuth();
    }, [authEsValido])
    
    return (
        <ThemeProvider theme={divertidogsTheme}>
            <GlobalSection>
                <StyledContainer>
                    <Content />
                </StyledContainer>
            </GlobalSection>
        </ThemeProvider>
    );
}


const GlobalSection = styled('section')`
    font-family: ${props => props.theme.fontPrimary}, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.8;
    font-weight: normal;
    background: ${props => props.theme.colors.light};
    color: #212529;
    height: 100%;
    overflow: auto;
`

const StyledContainer = styled(Container)`
    @media only screen and ${deviceMaxHeight.lg}{
        margin-top: 10%;
    }
    @media only screen and ${deviceMaxHeight.md}{
        margin-top: 5%;
    }
    @media only screen and ${deviceMaxHeight.sm}{
        margin-top: 0;
    }
`;

const Content = () => {
    return (
        <Row className='justify-content-center'>
            <Col md='12' lg='10'>
                <Wrapper className="d-md-flex">
                  
                </Wrapper>
            </Col>
        </Row>
    );
}


const Wrapper = styled('div')`
    width: 100%;
    overflow: hidden;
    background: white;
    border-radius: 5px;
    -webkit-box-shadow: 0px 10px 34px -15px rgba(0,0,0,0.24);
    -moz-box-shadow: 0px 10px 34px -15px rgba(0,0,0,0.24);
    box-shadow: 0px 10px 34px -15px rgba(0,0,0,0.24);
`

export default Enrutador;
