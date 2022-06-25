import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import ImageSection from './ImageSection';
import LoginSection from './LoginSection';
import { deviceMaxHeight } from "../../../styles/deviceSizes";


function Login() {
    return (
        <GlobalSection>
            <StyledContainer>
                <Content />
            </StyledContainer>
        </GlobalSection>
    );
}


const GlobalSection = styled('section')`
    font-family: 'Lato',Arial, sans-serif;
    font-size: 16px;
    line-height: 1.8;
    font-weight: normal;
    background: #F1EBE9;
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
                    <ImageSection />
                    <LoginSection />
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

export default Login;
