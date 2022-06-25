import styled from 'styled-components';
import { Button as BootButton } from 'react-bootstrap';


const Button = styled(BootButton)`
    cursor: pointer;
    height: 48px;
    box-shadow: none!important;
    font-size: 16px;
    padding: 10px 20px;
    &:hover, &:active, &:focus {
        outline: none;
    }
    &.btn-primary {
        background: #A833B9 !important;
        border: 1px solid #A833B9 !important;
        color: white !important;
        &:hover {
            border: 1px solid #A833B9;
            background: transparent;
            color : #A833B9;
        }
        &.btn-outline-primary {
            border: 1px solid #A833B9;
            background: transparent;
            color : #A833B9;
            &:hover {
                border: 1px solid transparent;
                background: #A833B9;
                color : white;
            }
        }
    }
    position: relative;
    border-radius: 5px;
    &:focus, &:active {
        outline: none !important;
        box-shadow: none;
        border: 1px solid #A833B9;
    }
    
`

export default Button;