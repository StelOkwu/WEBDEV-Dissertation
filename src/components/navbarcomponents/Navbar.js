import React, { useState } from 'react';
import { Button } from '../navbarcomponents/Button';
import { Link } from 'react-router-dom';
import Dropdown from '../navbarcomponents/Dropdown';
import '../navbarcomponents/navbars.css';
import { NavDropdown } from 'react-bootstrap';
// import Offices from '../../pages/Offices';

function Navbar() {
const [click, setClick] = useState(false);
const [dropdown, setDropdown] = useState(false);

const handleClick = () => setClick(!click);
const closeMobileMenu = () => setClick(false);

const onMouseEnter = () => {
    if (window.innerWidth < 960) {
        setDropdown(false);
    } else {
            setDropdown(true);
        }
    };
const onMouseLeave = () => {
    if(window.innerWidth < 960) {
        setDropdown(false);
    } else {
            setDropdown(false);
        }
    };
    return(
        <>
        <nav className='main-navbar'>
            <Link to='/' className='navbar-logo'>
             {/* <img src={process.env.PUBLIC_URL + "./pics/logo.png" } style={{width:"70%", height:"70%", fontStyle:"bold"}}/>
                              */}
                              Basic
            </Link>

         <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
                <Link to='/mainpage' className='nav-links' onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            
             <li className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
                    <NavDropdown title="Services" id="nav-dropdown"> 
                
                      <NavDropdown.Item id="navdropItem">
                        <Link to="/companies">Companies</Link> 
                        </NavDropdown.Item>

                        <NavDropdown.Divider />

                         <NavDropdown.Item id="navdropItem">
                        <Link to="/houseAsso">Housing Associations</Link> 
                        </NavDropdown.Item>

                        <NavDropdown.Divider />

                         <NavDropdown.Item id="navdropItem">
                        <Link to="/industries">Window Cleaning</Link> 
                        </NavDropdown.Item>
                   
                    <NavDropdown.Divider />

                         <NavDropdown.Item id="navdropItem">
                        <Link to="/offices">Damages</Link> 
                        </NavDropdown.Item>

                        <NavDropdown.Divider />

                         <NavDropdown.Item id="navdropItem">
                        <Link to="/others">Mold</Link> 
                        </NavDropdown.Item>
                        
                </NavDropdown>
                {dropdown && <Dropdown />}
            </li>

        

            <li className='nav-item'>
                <Link to='/contactUs' className='nav-links' onClick={closeMobileMenu}>
                    Contact Us
                </Link>
            </li>

             <li className='nav-item'>
                <Link to='/aboutUs' className='nav-links' onClick={closeMobileMenu}>
                    About Us
                </Link>
            </li>

                <li className='nav-item'>
                <Link to='/references' className='nav-links' onClick={closeMobileMenu}>
                    References
                </Link>
            </li>

              <li className='nav-item'>
                <Link to='/customerList' className='nav-links' onClick={closeMobileMenu}>
                    Show All Customer
                </Link>
            </li>

              <li className='nav-item'>
                <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                    Admin Login
                </Link>
            </li>

          
        </ul>
        <Button />
        </nav>


        </>
    )
};

export default Navbar;