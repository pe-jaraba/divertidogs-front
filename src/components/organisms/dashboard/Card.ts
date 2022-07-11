import styled from "styled-components";
import { StyledParagraph } from './Paragraph';
import { StyledH4 } from './H4';

export const Card = styled("div")`
    margin: 10px 0px;
    border-radius: 0px!important;
    display: inline-block;
    position: relative;
    border: none;
    width: 100%;
    margin: 15px 0;
    box-shadow: 0 1px 2px  rgb(0 0 0 / 8%);
    border-radius: 6px;
    color: rgba(0, 0, 0, 0.87);
    background-color: #fff;
`

export const CardHeader = styled("div")`
    padding: 15px 20px 0;
    z-index: 3;
    border-bottom: 0px!important;
    background-color: #fff;
    border-radius: none;
`
export const CardFooter = styled("div")`
    margin: 0 7px 0px;
    padding-top: 10px;
    background-color: #fff;
    border-top: 1px solid #eeeeee;

    div {
        display: inline-block;
    }
`

export const CardContent = styled("div")`
    padding: 15px 20px;
    position: relative;
`

export const CardContentCategory = styled(StyledParagraph)`
    margin-bottom: 0;
`


export const CardHeaderCategory = styled(StyledParagraph)`

`
export const CardHeaderTextTitle = styled(StyledH4)`
    margin-top: 0;
    margin-bottom: 3px;
    font-size: 19px;
    color: #222222;
    text-decoration: none;
`