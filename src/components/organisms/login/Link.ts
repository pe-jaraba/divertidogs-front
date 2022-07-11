import styled from "styled-components";

const Link = styled('a')`
    transition: .3s all ease;
    color: ${props => props.theme.colors.main};
    &:hover, &:focus {
        text-decoration: none !important;
        outline: none !important;
        box-shadow: none;
    }
`

export default Link;