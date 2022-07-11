import React from "react";
import styled from "styled-components";
import { NavDropdown } from "react-bootstrap";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';


const StyledNavbar = styled("div")`
   width: 100%;
   z-index: 9;
   position: relative;
`

const MenuLink = styled("a")`
    font-weight: 400;
    color: #333;
    &:hover{
      color: #FFD23F;
    }
    &:focus{
      color: #333;
    }
    text-decoration: none;
    transition: all 0.3s;
    position: relative;
    display: block;
    padding: 10px 15px !important;
`

const StyledButton = styled("button")`
  &:focus{
    box-shadow: none;
    outline: none;
    border:none;
  }

  cursor:pointer;
  background-color: transparent;
  border: none;
`

const StyledList = styled("ul")`
  padding: 0px;
  margin: 0px;
  list-style: none;
  & > li.active {
    color: white;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.08);
  }

  & > li > a {
    color: white;
  }
`

const StyledNav = styled("nav")`
  background-color: ${props => props.theme.colors.main};
  color: white;
  padding-top: 0;
`
const NavbarBrand = styled(MenuLink)`
  color: white;
`

const CollapsableSubMenu = styled("div")`
  flex-grow: unset;
`

const IconContainer = styled("span")`
  color: #fff;
`

const SideBarCollapser = styled(StyledButton)`
  border-radius: 50%;
  width: 45px;
  height: 45px;
  text-align: center;
  margin-right: 20px;
  border: none;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.09);
`

const SideBarCollapserIconContainer = styled(IconContainer)`
  margin: 9px;
  padding: 0px;
`

const CollapsedList = styled(StyledList)`
  & > li.show .dropdown-menu {
    transform: translate3d(0,0,0);
    opacity: 1;
    visibility: visible;
  }

  & > .active > a:focus {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.08);
  }
`

const DropdownMenu = styled(NavDropdown)`
  .dropdown-menu{
    font-size: 13px;
    padding: 10px 20px;
    border-radius: 2px;
    font-weight: 400;
    @media only screen and (min-width: 992px){
      border: 0;
      box-shadow: 0 2px 5px 0 rgb(0 0 0 / 26%);
      right: 0;
      left: auto;
    }
  }
  
`

interface NavbarProps {
  onMoreButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  onSidebarCollapseClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

function Navbar({ onMoreButtonClick, onSidebarCollapseClick }: NavbarProps) {
  return (
    <StyledNavbar className="top-navbar">
      <StyledNav className="navbar navbar-expand-lg justify-content-between">
        <div className="container-fluid">

          <SideBarCollapser type="button" id="sidebarCollapse"
            className="d-xl-block d-md-none d-none"
            onClick={onSidebarCollapseClick}>
            <SideBarCollapserIconContainer><ArrowBackIosIcon /></SideBarCollapserIconContainer>
          </SideBarCollapser>

          <NavbarBrand className="navbar-brand me-auto" href="#">Tablero</NavbarBrand>

          <StyledButton className="d-inline-block d-lg-none ml-auto more-button"
            type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
            onClick={onMoreButtonClick}>
            <IconContainer><MoreVertIcon /></IconContainer>
          </StyledButton>

          <CollapsableSubMenu className="collapse navbar-collapse d-lg-block d-sm-none d-md-none d-none" id="navbarSupportedContent">
            <CollapsedList className="nav navbar-nav ml-auto">

              <DropdownMenu className="nav-item" title={<IconContainer><SettingsIcon /></IconContainer>}>

              </DropdownMenu>

              <DropdownMenu className="nav-item" title={<IconContainer><PersonIcon /></IconContainer>}>
                <NavDropdown.Item href="/login">Cerrar Sesión</NavDropdown.Item>
              </DropdownMenu>

            </CollapsedList>
          </CollapsableSubMenu>
        </div>

      </StyledNav>
    </StyledNavbar>
  );
}

export default Navbar;