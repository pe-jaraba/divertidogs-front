import styled from 'styled-components';

const Title = styled('h4')`
    line-height: 1.5;
    font-weight: 400;
    font-family: ${props => props.theme.fontPrimary},Arial, sans-serif;
    color: black;
`

export default Title;