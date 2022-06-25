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
        background: ${props => props.theme.colors.main} !important;
        border: 1px solid ${props => props.theme.colors.main} !important;
        color: white !important;
        &:hover {
            border: 1px solid ${props => props.theme.colors.main};
            background: transparent;
            color : ${props => props.theme.colors.main};
        }
        &.btn-outline-primary {
            border: 1px solid ${props => props.theme.colors.main};
            background: transparent;
            color : ${props => props.theme.colors.main};
            &:hover {
                border: 1px solid transparent;
                background: ${props => props.theme.colors.main};
                color : white;
            }
        }
    }
    position: relative;
    border-radius: 5px;
    &:focus, &:active {
        outline: none !important;
        box-shadow: none;
        border: 1px solid ${props => props.theme.colors.main};
    }
    
`

export default Button;