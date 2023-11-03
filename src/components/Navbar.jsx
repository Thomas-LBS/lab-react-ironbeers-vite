import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav className="Navbar">
            <NavLink to="/">
                <img className="logo" src="/src/assets/home-icon.png" />
            </NavLink>
        </nav>
    )
}

export default Navbar