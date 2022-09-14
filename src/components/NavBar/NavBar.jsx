import React from 'react'
//Es hijo del navbar
import 'bootstrap/dist/css/bootstrap.css'
import { CartWidget } from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
               <NavLink to='/' style={{textDecoration: 'none', color: 'orange'}}>Ecommerce</NavLink> 
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item p-2">
                           <NavLink to='/categoria/nuevos' style={{textDecoration: 'none', color: 'green'}}>Nuevos</NavLink>
                        </li>
                        <li className="nav-item p-2">
                           <NavLink to='/categoria/oferta' style={{textDecoration: 'none', color: 'green'}} >Ofertas</NavLink>
                        </li>
                        <li className="nav-item p-2">
                           <NavLink to='/categoria/vendidos' style={{textDecoration: 'none', color: 'green'}} >Vendidos</NavLink>
                        </li>
                        
                    </ul>
                    <CartWidget counter={10}/>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

