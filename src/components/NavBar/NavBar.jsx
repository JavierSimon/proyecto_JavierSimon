import React from 'react'
//Es hijo del navbar
import 'bootstrap/dist/css/bootstrap.css'
import { CartWidget } from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-black">
            <div className="container-fluid">
               <NavLink to='/' style={{textDecoration: 'none', color: 'orange'}}><h1 className='m-2'>Ecommerce</h1></NavLink> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item p-3 m-1 border-bottom">
                           <NavLink to='/categoria/nuevos' style={{textDecoration: 'none', color: 'green'}}>Remeras</NavLink>
                        </li>
                        <li className="nav-item p-3 m-1 border-bottom">
                           <NavLink to='/categoria/oferta' style={{textDecoration: 'none', color: 'green'}} >Pantalones</NavLink>
                        </li>
                        <li className="nav-item p-3 m-1 border-bottom">
                           <NavLink to='/categoria/vendidos' style={{textDecoration: 'none', color: 'green'}} >Zapatillas</NavLink>
                        </li>
                        
                    </ul>
                    <NavLink to='/cart'>
                        <CartWidget />
                    </NavLink>  
                    
                </div>
            </div>
        </nav>
    )
}

export default NavBar

