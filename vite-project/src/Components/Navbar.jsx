import logo from '/public/assets/airbnb.svg'



const Navbar = () => {
    return (
        <nav className="nav">
            <img className='nav__logo' src={logo} alt="logo" />
        </nav>

    )
}

export default Navbar;