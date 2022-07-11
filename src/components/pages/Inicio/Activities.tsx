import React from "react";
import styled from "styled-components";
import { Card, CardContent, CardHeader, CardHeaderTextTitle } from '../../organisms/dashboard/Card';

const SteamLineItem = styled("div")`
    position: relative;
    padding-bottom: 12px;
    border-left: 1px solid #ccc;

    &:before {
        content: "";
        position: absolute;
        left: -6px;
        top: 0;
        background-color: #ccc;
        width: 12px;
        height: 12px;
        border-radius: 100%;
    }
`

const PrimarySteamLineItem = styled(SteamLineItem)`
    border-left-color: ${props => props.theme.colors.info};
    &:before, last-child:after {
        background-color: ${props => props.theme.colors.info};
    }
`

const DangerSteamLineItem = styled(SteamLineItem)`
    border-left-color: ${props => props.theme.colors.error};
    &:before, last-child:after {
        background-color: ${props => props.theme.colors.error};
    }
`

const WarningSteamLineItem = styled(SteamLineItem)`
    border-left-color: ${props => props.theme.colors.warning};
    &:before, last-child:after {
        background-color: ${props => props.theme.colors.warning};
    }
`

const SuccessSteamLineItem = styled(SteamLineItem)`
    border-left-color: ${props => props.theme.colors.success};
    &:before, last-child:after {
        background-color: ${props => props.theme.colors.success};
    }
`

const SteamLineItemContent = styled("div")`
    margin-left: 24px;
    &.text-muted{
        color: inherit;
        opacity: 0.6;
        font-size: 12px;
    }
    p{
        font-size: 14px;
        color: #333;
    }
`

const ActivitiesCard = styled(Card)`
    min-height: 485px;
`

function Activities() {
    return (
        <div className="col-lg-5 col-md-12">
            <ActivitiesCard className="card">
                <CardHeader className="card-header card-header-text">
                    <CardHeaderTextTitle className="card-title">Actividad</CardHeaderTextTitle>
                </CardHeader>
                <CardContent className="card-content">

                    <div className="steamline">
                        <PrimarySteamLineItem className="sl-item sl-primary">
                            <SteamLineItemContent className="sl-content">
                                <small className="text-muted">Hace 5 mins</small>
                                <p>Butifarra confirmó asistencia</p>
                            </SteamLineItemContent>
                        </PrimarySteamLineItem>
                        <DangerSteamLineItem className="sl-item sl-danger">
                            <SteamLineItemContent className="sl-content">
                                <small className="text-muted">Hace 25 mins</small>
                                <p>Pedro Jaraba canceló plan de hospedaje por 3 días</p>
                            </SteamLineItemContent>
                        </DangerSteamLineItem>
                        <SuccessSteamLineItem className="sl-item sl-success">
                            <SteamLineItemContent className="sl-content">
                                <small className="text-muted">Hace 40 mins</small>
                                <p>David Jaraba pagó servicio de guardería</p>
                            </SteamLineItemContent>
                        </SuccessSteamLineItem>
                        <SteamLineItem className="sl-item">
                            <SteamLineItemContent className="sl-content">
                                <small className="text-muted">Hace 45 mins</small>
                                <p>Draco consumió paleta grande</p>
                            </SteamLineItemContent>
                        </SteamLineItem>
                        <WarningSteamLineItem className="sl-item sl-warning">
                            <SteamLineItemContent className="sl-content">
                                <small className="text-muted">Hace 55 mins</small>
                                <p>Pedro Jaraba agendó plan de hospedaje por 3 días</p>
                            </SteamLineItemContent>
                        </WarningSteamLineItem>
                        <SteamLineItem className="sl-item">
                            <SteamLineItemContent className="sl-content">
                                <small className="text-muted">Hace 60 mins</small>
                                <p>Jane Doe agendó guardería para el 8 de Julio</p>
                            </SteamLineItemContent>
                        </SteamLineItem>
                    </div>
                </CardContent>
            </ActivitiesCard>
        </div>
    );
}

export default Activities;