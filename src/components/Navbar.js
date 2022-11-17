function Navbar() {
    return ( 
        <nav className="navbar navbar-expand navbar-light bg-light d-flex align-items-center justify-content-center">
        <ul className="nav navbar-nav">
            <li className="nav-item active pt-2 pb-2 pe-4 ps-4">
                <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item  pt-2 pb-2 pe-4 ps-4">
                <a className="nav-link" href="#specials">Specials</a>
            </li>
             <li className="nav-item  pt-2 pb-2 pe-4 ps-4">
                <a className="nav-link" href="#about">About</a>
            </li>
             <li className="nav-item pt-2 pb-2 pe-4 ps-4">
                <a className="nav-link" href="#menu">Menu</a>
            </li>
             <li className="nav-item  pt-2 pb-2 pe-4 ps-4">
                <a className="nav-link " href="#contact">Contact</a>
            </li>
        </ul>
      </nav>
     );
}

export default Navbar;