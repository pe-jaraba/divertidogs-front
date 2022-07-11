import React from "react";
import styled from "styled-components";
import { Card, CardContent, CardHeaderTextTitle, CardHeader, CardHeaderCategory } from '../../organisms/dashboard/Card';

const StyledTable = styled("table")`
    & > thead > tr > th {
        border-bottom: 1px;
        font-size: 16px;
        font-weight: 500;
    }
`

const TableCard = styled(Card)`
    min-height: 485px;
`

function Table(){
    return (
        <div className="col-lg-7 col-md-12">
                <TableCard className="card">
                    <CardHeader className="card-header card-header-text">
                        <CardHeaderTextTitle className="card-title">Asistencia diaria</CardHeaderTextTitle>
                        <CardHeaderCategory className="category">Mascotas ingresadas el día de hoy, 8 de Julio de 2022</CardHeaderCategory>
                    </CardHeader>
                    <CardContent className="card-content table-responsive">
                        <StyledTable className="table table-hover">
                            <thead className="text-primary">
                                <tr>
                                    <th>No.</th>
                                    <th>Nombre</th>
                                    <th>Propietario</th>
                                    <th>Sale hoy</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Butifarra</td>
                                    <td>Jorge Rodriguez</td>
                                    <td>Si</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Draco</td>
                                    <td>Pedro Jaraba</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Mulán</td>
                                    <td>Sergio Urrea</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Susaneja</td>
                                    <td>Maria Walteros</td>
                                    <td>Si</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Milo</td>
                                    <td>Daniela Gutierrez</td>
                                    <td>Si</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Apolo</td>
                                    <td>Juan Balboa</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Mia</td>
                                    <td>Luisa Jones</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Praga</td>
                                    <td>Maria Walteros</td>
                                    <td>No</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Vampirito</td>
                                    <td>Janeth Fernandez</td>
                                    <td>Si</td>
                                </tr>
                            </tbody>
                        </StyledTable>
                    </CardContent>
                </TableCard>
            </div>
    );
}

export default Table;