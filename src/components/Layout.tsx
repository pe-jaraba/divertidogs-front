import React from "react";
import Sidebar from "./organisms/Sidebar";
import Navbar from "./organisms/Navbar";
import { ThemeProvider } from "styled-components";
import { divertidogsTheme } from "../styles/divertidogs-theme";
import styled from "styled-components";
import { useState } from "react";

const Wrapper = styled("div")`
    line-height: 1.8;
    position: relative;
    width: 100%;
    overflow:auto;
`

const ContentAndNavbar = styled("div")`
    position: relative;
    transition: all 0.3s;
    background-color: ${props => props.theme.colors.light};
    height: 100vh;
    @media only screen and (min-width: 992px){
        width: calc(100% - 260px);
        position: relative;
        float: right;
        transition: all 0.3s;
        background-color: ${props => props.theme.colors.light};
     }
    
     &.active{
        @media only screen and (min-width: 992px){
            width: calc(100% - 80px);
         }
     }
`

const BodyOverlay = styled("div")`
    &.show-nav {
        transform: translateX(0%);
        opacity: 1;
        display: block;
        visibility: visible;
        z-index: 15;
    }
    @media only screen and (max-width: 992px){
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: none;
        visibility: hidden;
        opacity: 0;
        z-index: 3;
        transition: all 150ms linear;
        background-color: rgba(0, 0, 0, 0.5);
    }
`
interface LayoutProps {
    Content: React.ComponentType
}

function Layout({ Content }: LayoutProps) {
    const [showNav, setShowNav] = useState(false);
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    

    const toggleShowNav = (e: React.MouseEvent<HTMLButtonElement>) => { setShowNav(!showNav) };
    const toggleShowNavDiv = (e: React.MouseEvent<HTMLDivElement>) => { setShowNav(!showNav) };
    const toggleActiveSidebar = (e: React.MouseEvent<HTMLButtonElement>) => { setIsSidebarActive(!isSidebarActive) };

    return (
        <ThemeProvider theme={divertidogsTheme}>
            <Wrapper className="wrapper">
                <BodyOverlay className={`body-overlay ${showNav ? "show-nav" : ""}`.trim()} onClick={toggleShowNavDiv}></BodyOverlay>
                <Sidebar showNav={showNav} isActive={isSidebarActive} />
                <ContentAndNavbar id="content" className={`${isSidebarActive ? "active" : ""}`}>
                    <Navbar onMoreButtonClick={toggleShowNav} onSidebarCollapseClick={toggleActiveSidebar} />
                    <Content />
                </ContentAndNavbar>
            </Wrapper>
        </ThemeProvider>
    );
}

export default Layout;