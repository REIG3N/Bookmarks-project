import { useMatch, useResolvedPath } from "react-router-dom";
import { useState } from "react";
import {
    StyledNavbar,
    UlNavbar,
    LiNavbar,
    NavbarLink,
    RightSideNavbar,
    LeftSideNavbar,
    LogoTitleDiv,
    BurgerButton,
    BurgerMenu,
    BurgerliNavbar
} from './components/styledComponents/StyledNavbar';

export default function Navbar() {
    const [ShowBurgerMenu, setShowBurgerMenu] = useState(false);

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({ path: resolvedPath.pathname, end: true })
        return (
            <li className={isActive ? "active" : ""}>
                <NavbarLink to={to} {...props}>
                    {children}
                </NavbarLink>
            </li>
        )
    }

    return (
        <StyledNavbar className="nav">
            <LeftSideNavbar>
                <LogoTitleDiv>
                    <img src="BookMark_Icon.png" alt="" height={25} />
                    <CustomLink to="/mybooks">BookMarks</CustomLink>
                </LogoTitleDiv>
            </LeftSideNavbar>

            <RightSideNavbar>
                <UlNavbar>
                    <BurgerButton onClick={() => { setShowBurgerMenu(!ShowBurgerMenu) }} >
                        <img src={ShowBurgerMenu ? "/close_menu.svg" : "/burger_menu.png"} height={20}></img>
                    </BurgerButton>
                    <LiNavbar>
                        <CustomLink to="/mybooks">Mes Livres</CustomLink>
                    </LiNavbar>
                    <LiNavbar>
                        <CustomLink to="/mydiary">Mon Journal</CustomLink>
                    </LiNavbar>
                </UlNavbar>
            </RightSideNavbar>
            <BurgerMenu style={{ display: ShowBurgerMenu ? "block" : "none" }}>
                <BurgerliNavbar>
                    <img src="book-icon.svg" alt="" height={25} />
                    <CustomLink to="/mybooks">Mes Livres</CustomLink>
                </BurgerliNavbar>
                <BurgerliNavbar>
                    <img src="note-icon.svg" alt="" height={25} />

                    <CustomLink to="/mydiary">Mon Journal</CustomLink>
                </BurgerliNavbar>
            </BurgerMenu>

        </StyledNavbar>
    )
}