import React from "react";
import Table from "./Table";
import StatsCards from "./StatsCards";
import Activities from "./Activities";
import styled from "styled-components";


const StyledDashboardContent = styled("div")`
    padding: 10px 20px 0px 20px;
    position: relative;
    width: 100%;
`

const TableAndActivitiesRow = () => {
    return (
        <div className="row">
            <Table />
            <Activities />
        </div>
    );
}

function DashboardContent() {
    return (
        <StyledDashboardContent className="main-content">
            <StatsCards />
            <TableAndActivitiesRow />
        </StyledDashboardContent>
    );
}


export default DashboardContent;