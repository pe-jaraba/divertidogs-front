import React from "react";
import { useState } from "react";
import { Alert } from 'react-bootstrap';

interface ServerValidationErrorAlertProps {
    serverFailedValidations: string[]
}

function ServerValidationErrorAlert(props: ServerValidationErrorAlertProps) {
    return (
        <Alert variant="danger" >
            <Alert.Heading>¡Datos inválidos!</Alert.Heading>
            <ul>
                {props.serverFailedValidations.map((validation, index) => <li key={index}>{validation}</li>)}
            </ul>
        </Alert>
    );
}

export default ServerValidationErrorAlert;