import './Navigation.modules.css'

function Navigation() {
    return ( 
        <>
    <div className="container">
       <div className="navbar">
        <a href="#" className="nav-button">Contact</a>
        <a href="#" className="nav-button">Resume</a>
        <a href="#" className="nav-button">About</a>
        <a href="#" className="nav-button">Certificate</a>
        <a href="#" className="nav-button">Projects</a>
       </div>  
    </div>
    <div className="menuContainer">
       <img className='Menu' src="img/Menu.png" alt="" />
       </div>
        </>
     );
}

export default Navigation;