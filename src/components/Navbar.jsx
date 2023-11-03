import { NavLink } from "react-router-dom"

function Navbar() {
    return (
        <nav className="Navbar">
            <NavLink className="logo style-links" to="/">
                <img className="logo" src="/src/assets/home-icon.png" />
            </NavLink>
            <div className="links">
            <NavLink className="style-links" to="/beers">All Beers</NavLink>
            <NavLink className="style-links" to="/random-beer">Random Beer</NavLink>
            <NavLink className="style-links" to="/new-beer">Add a Beer</NavLink>
            </div>
            <div></div>
        </nav>
    )
}

export default Navbar