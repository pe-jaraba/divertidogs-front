import styled from "styled-components";
import { Form } from 'react-bootstrap';

const FormControl = styled(Form.Control)`
    height: 48px;
    background: white;
    color: black;
    font-size: 16px;
    border-radius: 5px;
    box-shadow: none;
    border: 1px solid rgba(0,0,0,.1);
    &::-webkit-input-placeholder {
    color: rgba(0,0,0,.2) !important;
    }
    &::-moz-placeholder {
    color: rgba(0,0,0,.2) !important;
    }
    &:-ms-input-placeholder {
    color: rgba(0,0,0,.2) !important;
    }
    &:-moz-placeholder {
    color: rgba(0,0,0,.2) !important;
    }
    &:focus, &:active {
        outline: none !important;
        box-shadow: none;
        border: 1px solid ${props => props.theme.colors.main};
    }
    
`

export default FormControl;