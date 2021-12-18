import React, { useState } from 'react';
import { FiMenu, FiX  } from 'react-icons/fi';
import '../components/navbar.css';
import {Link} from 'react-router-dom';

const NavbarAdmin = () => {
    const [open, setOpen] = useState(false);
  
    return (
        <>
        <div className="nav-icon" onClick={() => setOpen(!open)}>
            <nav className="navbar" >
              
                    
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
               
                     <li className="nav-item">
                        <Link to="/customer" className="nav-link" onClick={() => setOpen(false)}>
                        Create customer
                        </Link>
                    </li>

                     <li className="nav-item">
                        <Link to="/customerlist" className="nav-link" onClick={() => setOpen(false)}>
                        View All Customers
                        </Link>
                    </li>
                    

                  <li className="nav-item">
                        <Link to="/login" className="nav-link" onClick={() => setOpen(false)}>
                        Login
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
                    
            </div>
         <h1>Admin</h1>
        </>
    )
}

export default NavbarAdmin;
