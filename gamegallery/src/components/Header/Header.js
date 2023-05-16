import { NavLink } from "react-router-dom";

export const Header = () => {
    const headerNames = ["Main", "Catalog", "About us"];
    const headerLinks = ["./", "games", "/about"];

    return (
        <>
            <div className="HeaderBlock">
                <nav className="header_items">
                    {headerNames.map((headerName, index) => (
                        <NavLink key={headerName} to={headerLinks[index]}>
                            {headerName}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </>
    );
};
