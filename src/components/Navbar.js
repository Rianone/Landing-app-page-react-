function Navbar() {
    return ( 
        <nav class="navbar navbar-expand navbar-light bg-light d-flex align-items-center justify-content-center">
        <ul class="nav navbar-nav">
            <li class="nav-item active pt-2 pb-2 pe-4 ps-4 me-4">
                <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item me-4 pt-2 pb-2 pe-4 ps-4">
                <a class="nav-link" href="#specials">Specials</a>
            </li>
             <li class="nav-item me-4 pt-2 pb-2 pe-4 ps-4">
                <a class="nav-link" href="#about">About</a>
            </li>
             <li class="nav-item me-4 pt-2 pb-2 pe-4 ps-4">
                <a class="nav-link" href="#menu">Menu</a>
            </li>
             <li class="nav-item  pt-2 pb-2 pe-4 ps-4">
                <a class="nav-link " href="#contact">Contact</a>
            </li>
        </ul>
      </nav>
     );
}

export default Navbar;