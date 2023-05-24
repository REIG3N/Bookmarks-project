import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {

    function CustomLink({ to, children, ...props }) {
        const resolvedPath = useResolvedPath(to)
        const isActive = useMatch({path: resolvedPath.pathname, end: true})
        return (
            <li className={isActive ? "active" : ""}>
                <Link to={to} {...props}>
                    {children}
                </Link>
            </li>
        )
    }

    return (
        <>
            <nav className="nav">
                <CustomLink to="/mybooks" className="site-title">
                    BookMarks
                </CustomLink>
            </nav>
            <ul>
                <CustomLink to="/mybooks">Mes Livres</CustomLink>
                <CustomLink to="/mydiary">Mon Journal</CustomLink>
                <CustomLink to="/community">Communauté</CustomLink>
            </ul>
        </>
    )
}