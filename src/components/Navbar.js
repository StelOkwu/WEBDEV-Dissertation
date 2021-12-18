import React, { useState } from 'react';
// import { FiMenu, FiX  } from 'react-icons/fi';
import '../components/navbar.css';
// import {Link} from 'react-router-dom';
// import { NavDropdown, Button } from 'react-bootstrap';



 function Navbar() {
        const [open, setOpen] = useState(false);
  
      return (
        <>
           {/* <div className="nav-icon" onClick={() => setOpen(!open)}> */}
            {/* <nav className="navbar" >
                <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
                    LOGO
                </Link>
    
                <ul className={open ? 'nav-links active' : 'nav-links'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick={() => setOpen(false)}>
                        Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/mainpage" className="nav-link" onClick={() => setOpen(false)}>
                        Main Page
                        </Link>
                    </li>
                    {/* <NavDropdown title="Services" id="nav-dropdown"> 
                    <NavDropdown.Item>Companies</NavDropdown.Item>
                    <NavDropdown title="Company" id="nav-dropdowm">
                        Companies
                    <NavDropdown.Item>Companies</NavDropdown.Item>
                    <NavDropdown.Item>Housing Associations</NavDropdown.Item>
                        </NavDropdown>
                    <NavDropdown.Item>Housing Associations</NavDropdown.Item>
                    <NavDropdown.Item>Others</NavDropdown.Item>
                   <NavDropdown.Divider />
                    <NavDropdown.Item>Separated link</NavDropdown.Item>
                </NavDropdown> */}
                     {/* <li className="nav-item">
                        <Link to="/services" className="nav-link" onClick={() => setOpen(false)}>
                        Services
                        </Link>
                    </li>

                     <li className="nav-item">
                        <Link to="/aboutUs" className="nav-link" onClick={() => setOpen(false)}>
                        About Us
                        </Link>
                    </li>

                     <li className="nav-item">
                        <Link to="/contactUs" className="nav-link" onClick={() => setOpen(false)}>
                        Contact Us
                        </Link>
                    </li>

                     <li className="nav-item">
                        <Link to="/references" className="nav-link" onClick={() => setOpen(false)}>
                        References
                        </Link>
                    </li>

                     {/* <li className="nav-item">
                        <Link to="/customerlist" className="nav-link" onClick={() => setOpen(false)}>
                        View All Customers
                        </Link>
                    </li> */}

                  {/* <li className="nav-item">
                        <Link to="/login" >
                        <Button variant="primary" size="sm">Admin</Button>{' '}
                        </Link>
                    </li>
                      <li className="nav-item">
                        <Link to="/register" className="nav-link" onClick={() => setOpen(false)}>
                        Register
                        </Link>
                    </li>
                </ul>
                 {open ? <FiX /> : <FiMenu />}
            </nav>
                     */}
            {/* </div> 
          } */}
            </>
)};
  
export default Navbar;