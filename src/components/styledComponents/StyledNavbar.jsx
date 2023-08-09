import styled from 'styled-components'
import { Link } from "react-router-dom";


export const StyledNavbar = styled.nav`
background-color: #D9D9D9;
height: 80px;
width: 100%;
margin-bottom: 20px;

display: flex;
justify-content: space-between;
list-style: none;
color: #000 !important;
`
export const LeftSideNavbar = styled.div`
width: 30%;
display: flex;
align-items: center;
justify-content: flex-start;
padding-left: 30px;

`

export const RightSideNavbar = styled.div`
width: 70%;
display: flex;
align-items: center;
justify-content: flex-end;
padding-right: 30px;

`
export const LogoTitleDiv = styled.div`
display:flex;
align-items:center;
list-style: none;
text-decoration: none;
color: #000 !important; 
`

export const UlNavbar = styled.ul`
display: flex;
gap: 30px;


`
export const LiNavbar = styled.li`
list-style: none;
@media (max-width: 500px){
    display: none;
}
`
export const NavbarLink = styled(Link)`
list-style: none;
text-decoration: none;
color: #000 !important; 

`
export const BurgerButton = styled.button`
display: none;
cursor: pointer;
border: none;
@media (max-width: 500px){
    display: flex;
}
`
export const BurgerMenu = styled.div`
display: none;
position: absolute;
right: 0px;
top:80px;
background: #D9D9D9;
width: 300px;
padding: 25px;
`
export const BurgerliNavbar = styled(LiNavbar)`
display: none;
align-items: center;
gap: 15px;
margin-bottom:20px;
@media (max-width: 500px){
    display: flex;
}
`
    

