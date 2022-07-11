import React from "react";
import styled from "styled-components";
import InfoIcon from '@mui/icons-material/Info';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PetsIcon from '@mui/icons-material/Pets';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import { Card, CardContent, CardFooter, CardContentCategory, CardHeader } from '../../organisms/dashboard/Card';
import { StyledH3 } from '../../organisms/dashboard/H3';
import { StyledLink } from '../../organisms/dashboard/Link';

const StatsCardFooterIconContainer = styled("span")`
   .text-info {
     color: ${props => props.theme.colors.main}!important;
   } 
`

const StatsCardHeaderIconContainer = styled("span")`
  svg{
    font-size: 36px;
    line-height: 56px;
    width: 56px;
    height: 56px;
  }
`

const IconWarning = styled("div")`
  color: ${props => props.theme.colors.warning};
`

const IconSuccess = styled("div")`
  color: ${props => props.theme.colors.success};
`

const IconDanger = styled("div")`
  color: ${props => props.theme.colors.error};
`

const IconInfo = styled("div")`
  color: ${props => props.theme.colors.info};
`

const StatsCardFooterStats = styled("div")`
  line-height: 22px;
  color: #555555;
  font-size: 15px;
`
const StatsCardFooter = styled(CardFooter)`
    svg{
        position: relative;
        top: -1px;
        font-size: 16px;
        margin-right: 5px;
    }
`
const StatsCardContent = styled(CardContent)`
    text-align: right;
    padding-top: 10px;
`

const StatsCardHeader = styled(CardHeader)`
    float: left;
    text-align:center;
`

const StatsCardContentTitle = styled(StyledH3)`
    margin: 0;
`

function StatsCards() {
    return (
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
                <Card className="card card-stats">
                    <StatsCardHeader className="card-header">
                        <IconWarning className="icon icon-warning">
                            <StatsCardHeaderIconContainer><PetsIcon /></StatsCardHeaderIconContainer>
                        </IconWarning>
                    </StatsCardHeader>
                    <StatsCardContent className="card-content">
                        <CardContentCategory className="category">
                            <strong>Registros</strong>
                        </CardContentCategory>
                        <StatsCardContentTitle className="card-title">
                            4
                        </StatsCardContentTitle>
                    </StatsCardContent>
                    <StatsCardFooter className="card-footer">
                        <StatsCardFooterStats className="stats">
                            <StatsCardFooterIconContainer><InfoIcon className="text-info" /></StatsCardFooterIconContainer>
                            <StyledLink href="#">Nuevas mascotas este mes</StyledLink>
                        </StatsCardFooterStats>
                    </StatsCardFooter>
                </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <Card className="card card-stats">
                    <StatsCardHeader className="card-header">
                        <IconInfo className="icon icon-info">
                            <StatsCardHeaderIconContainer><FactCheckIcon /></StatsCardHeaderIconContainer>
                        </IconInfo>
                    </StatsCardHeader>
                    <StatsCardContent className="card-content">
                        <CardContentCategory className="category">
                            <strong>Asistencia</strong>
                        </CardContentCategory>
                        <StatsCardContentTitle className="card-title">
                            12
                        </StatsCardContentTitle>
                    </StatsCardContent>
                    <StatsCardFooter className="card-footer">
                        <StatsCardFooterStats className="stats">
                            <StatsCardFooterIconContainer><InfoIcon className="text-info" /></StatsCardFooterIconContainer>
                            <StyledLink href="#">Promedio por dia este mes</StyledLink>
                        </StatsCardFooterStats>
                    </StatsCardFooter>
                </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <Card className="card card-stats">
                    <StatsCardHeader className="card-header">
                        <IconSuccess className="icon icon-success">
                            <StatsCardHeaderIconContainer><ReceiptIcon /></StatsCardHeaderIconContainer>
                        </IconSuccess>
                    </StatsCardHeader>
                    <StatsCardContent className="card-content">
                        <CardContentCategory className="category">
                            <strong>Facturación</strong>
                        </CardContentCategory>
                        <StatsCardContentTitle className="card-title">
                            $13.450M
                        </StatsCardContentTitle>
                    </StatsCardContent>
                    <StatsCardFooter className="card-footer">
                        <StatsCardFooterStats className="stats">
                            <StatsCardFooterIconContainer><InfoIcon className="text-info" /></StatsCardFooterIconContainer>
                            <StyledLink href="#">Consumos facturados este mes</StyledLink>
                        </StatsCardFooterStats>
                    </StatsCardFooter>
                </Card>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <Card className="card card-stats">
                    <StatsCardHeader className="card-header">
                        <IconDanger className="icon icon-danger">
                            <StatsCardHeaderIconContainer><AttachMoneyIcon /></StatsCardHeaderIconContainer>
                        </IconDanger>
                    </StatsCardHeader>
                    <StatsCardContent className="card-content">
                        <CardContentCategory className="category">
                            <strong>Ingresos</strong>
                        </CardContentCategory>
                        <StatsCardContentTitle className="card-title">
                            $11.250M
                        </StatsCardContentTitle>
                    </StatsCardContent>
                    <StatsCardFooter className="card-footer">
                        <StatsCardFooterStats className="stats">
                            <StatsCardFooterIconContainer><InfoIcon className="text-info" /></StatsCardFooterIconContainer>
                            <StyledLink href="#">Total pagos este mes</StyledLink>
                        </StatsCardFooterStats>
                    </StatsCardFooter>
                </Card>
            </div>
        </div>
    );
}

export default StatsCards;