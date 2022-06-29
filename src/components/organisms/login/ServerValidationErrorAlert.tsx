import React from "react";
import { Card } from 'react-bootstrap';
import styled from "styled-components";

interface ServerValidationErrorAlertProps {
    serverFailedValidations: string[]
}

const StyledTextDiv = styled("div")`
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: 700;
`

function ServerValidationErrorAlert(props: ServerValidationErrorAlertProps) {
    return (
        <StyledTextDiv className="d-flex">
            <div className="w-100">
                <Card text="danger" border="danger" >
                    <Card.Header ><strong>ERROR</strong></Card.Header>
                    <Card.Body>
                        
                        <Card.Subtitle >
                            Datos Inválidos:
                        </Card.Subtitle>
                        <Card.Text >
                            <ul>
                                {props.serverFailedValidations.map((validation, index) => <li key={index}>{validation}</li>)}
                            </ul>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </StyledTextDiv>



    );
}

export default ServerValidationErrorAlert;