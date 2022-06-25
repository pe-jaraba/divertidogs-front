import React from 'react';
import styled from "styled-components";
import { deviceMax } from "../../../styles/deviceSizes";
import logo from '../../../assets/logo.png'

const ImageSection = () => {
    return (
        <ImageSectionStyle className="img" style={{ backgroundImage: 'url(' + logo + ')' }} />
    );
}

const ImageSectionStyle = styled('div')`
    background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
    width: 50%;
	@media only screen and ${deviceMax.md}{
        width: 100%;
    }
    @media only screen and ${deviceMax.sm}{
        height: 250px;
    }
  
`
export default ImageSection;