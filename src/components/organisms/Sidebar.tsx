import React from "react";
import styled from "styled-components";
import { Image } from "react-bootstrap";
import logo from "../../assets/divertidogs_white.jpeg";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PetsIcon from '@mui/icons-material/Pets';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const StyledSidebar = styled("nav")`
   position: fixed;
   height: 100vh!important;
   top: 0;
   left: 0;
   bottom: 0;
   z-index: 11;
   width: 260px;
   overflow: auto;
   transition: all 0.3s;
   background-color: #fff;
   box-shadow: 0 10px 30px -12px rgba(0 0 0 / 42%), 0 4px 25px 0px rgba(0 0 0 / 12%), 0 8px 10px -5px rgba(0 0 0 / 20%);
   &::webkit-scrollbar{
     width: 5px;
     border-radius: 10px;
     background-color: #eee;
     display: none;
   }
   &::webkit-scrollbar-thumbs{
    width: 5px;
    border-radius: 10px;
    background-color: #eee;
    display: none;
  }
  &:hover::webkit-scrollbar{
    display: block;
  }
  &:hover::webkit-scrollbar-thumbs{
    display: block;
  }
  &.show-nav {
    transform: translateX(0%);
    opacity: 1;
    display: block;
    visibility: visible;
    z-index: 15;
  }

  &.active {
    @media only screen and (min-width: 992px){
        width: 80px;
        height: 100%!important;
        position: absolute!important;
        overflow: visible!important;
        top:0!important;
        z-index: 666;
        float: left!important;
        bottom: 0!important;
    }
  }

  &.active .sidebar-header h3 span {
    @media only screen and (min-width: 992px){
       display: none;
       transition: all 0.5s ease;
    }
  }

  &.active ul li a .menu-item-name {
    @media only screen and (min-width: 992px){
       display: none;
       transition: all 0.5s ease;
    }
  }

  &.active .dropdown-toggle::after {
    @media only screen and (min-width: 992px){
       display: none;
       transition: all 0.5s ease;
    }
  }

  &.active .menu {
    position: absolute;
    left: 81px;
    background-color: white;
    width: 180px;
    height: auto;
    margin: 5px 0;
    top: 0;
    border: 1px solid #dcd9d9;
    z-index: 4;
  }                                                                                                                                                                                                              

  @media only screen and (max-width: 992px){
        position: fixed;
        top: 0;
        bottom: 0;
        z-index: 10;
        width: 260px;
        transform: translatex(-100%);
        transition: all 150ms linear;
        box-shadow: none!important;
    }
  
`
const SidebarLogo = styled(Image)`
    width: 45px;
    margin-right: 10px;
`

const MenuList = styled("ul")`
    padding: 0px;
    margin: 0px;
    list-style: none;
`

const MenuItem = styled("li")`
   padding: 2px 7px;
   &.active>a{
     color: #333;
     background-color: ${props => props.theme.colors.light};
   }
`
const MenuLink = styled("a")`
    font-weight: 400;
    color: #333;
    &:hover{
        color: #333;
        background-color: ${props => props.theme.colors.light};
    }
    &:focus{
        color: #333;
    }
    text-decoration: none;
    transition: all 0.3s;
    padding: 10px;
    line-height: 30px;
    border-radius: 5px;
    position: relative;
    font-size: 15px;
    display: block;
`

const Title = styled("h3")`
    font-weight: 600;
    letter-spacing: 2px;
    line-height: 1.5em;
    color: #333;
    font-size: 17px;
    margin: 0px;
    text-transform: uppercase;
    transition: all 0.5s ease;
`

const TitleSpan = styled("span")`
    width: 45px;
    margin-right: 10px;
`

const SideBarHeader = styled("div")`
    padding: 9px;
    background-color: #fff;
    border-bottom: 1px solid #eee;
`

const MenuItemNameSpan = styled("span")`
    text-transform: capitalize;
    display: inline-block;
    &.danger {
        color: ${props => props.theme.colors.error};
    }
`

const IconContainer = styled("span")`
    position: relative;
    margin-right: 10px;
    color: ${props => props.theme.colors.main};
    margin-left: 10px;
`

const DangerIconContainer = styled(IconContainer)`
    color: ${props => props.theme.colors.error};
`

interface SidebarProps {
    showNav: boolean
    isActive: boolean
}

function Sidebar({ showNav, isActive }: SidebarProps) {

    return (
        <StyledSidebar className={`sidebar ${showNav ? "show-nav" : ""} ${isActive ? "active" : ""}`.trim()} id="sidebar">
            <SideBarHeader className="sidebar-header">
                <Title>
                    <SidebarLogo src={logo} className="img-fluid"></SidebarLogo>
                    <TitleSpan>DIVERTIDOGS</TitleSpan>
                </Title>
            </SideBarHeader>
            <MenuList className="list-unstyled components">


                <MenuItem className="active">
                    <MenuLink href="/inicio" className="dashboard"><IconContainer><DashboardIcon /></IconContainer><MenuItemNameSpan className="menu-item-name">Tablero</MenuItemNameSpan></MenuLink>
                </MenuItem>


                <MenuItem className="">
                    <MenuLink href="#" >
                        <IconContainer><ContactPageIcon /></IconContainer><MenuItemNameSpan className="menu-item-name">Propietarios</MenuItemNameSpan>
                    </MenuLink>
                </MenuItem>

                <MenuItem className="">
                    <MenuLink href="#" >
                        <IconContainer><PetsIcon /></IconContainer><MenuItemNameSpan className="menu-item-name">Mascotas</MenuItemNameSpan>
                    </MenuLink>
                </MenuItem>

                <MenuItem className="">
                    <MenuLink href="#" >
                        <IconContainer><MenuBookIcon /></IconContainer><MenuItemNameSpan className="menu-item-name">Consumibles</MenuItemNameSpan>
                    </MenuLink>
                </MenuItem>

                <MenuItem className="">
                    <MenuLink href="#" >
                        <IconContainer><ReceiptIcon /></IconContainer><MenuItemNameSpan className="menu-item-name">Consumos</MenuItemNameSpan>
                    </MenuLink>
                </MenuItem>

                <MenuItem className="">
                    <MenuLink href="#" >
                        <IconContainer><AttachMoneyIcon /></IconContainer><MenuItemNameSpan className="menu-item-name">Pagos</MenuItemNameSpan>
                    </MenuLink>
                </MenuItem>

                <div className="small-screen navbar-display">
                    <MenuItem className="d-lg-none d-md-block d-xl-none d-sm-block">
                        <MenuLink href="#" >
                            <IconContainer><SettingsIcon /></IconContainer><MenuItemNameSpan className="menu-item-name">Configuración</MenuItemNameSpan>
                        </MenuLink>
                    </MenuItem>

                    <MenuItem className="d-lg-none d-md-block d-xl-none d-sm-block">
                        <MenuLink href="#" >
                            <IconContainer><PersonIcon /></IconContainer><MenuItemNameSpan className="menu-item-name">Usuario</MenuItemNameSpan>
                        </MenuLink>
                    </MenuItem>
                </div>

                <MenuItem className="">
                    <MenuLink href="#" >
                        <IconContainer><FactCheckIcon /></IconContainer><MenuItemNameSpan className="menu-item-name">Asistencia</MenuItemNameSpan>
                    </MenuLink>
                </MenuItem>

                <MenuItem className="">
                    <MenuLink href="/login" >
                        <DangerIconContainer><PowerSettingsNewIcon /></DangerIconContainer><MenuItemNameSpan className="menu-item-name">Cerrar Sesión</MenuItemNameSpan>
                    </MenuLink>
                </MenuItem>

            </MenuList>
        </StyledSidebar>
    );
}

export default Sidebar;