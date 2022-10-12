import React from 'react'
//Es hijo del navbar
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import { CartWidget } from '../Cart/CartWidget'

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg bg-black sticky-top">
            <div className="container-fluid">
                <NavLink to='/' style={{ textDecoration: 'none', color: 'orange' }}><h1 className='m-2'>Ecommerce</h1></NavLink>
                <button className="navbar-toggler bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item p-3 m-1 border-bottom">
                            <NavLink to='/categoria/remeras' style={{ textDecoration: 'none', color: 'green' }}>Remeras</NavLink>
                        </li>
                        <li className="nav-item p-3 m-1 border-bottom">
                            <NavLink to='/categoria/pantalones' style={{ textDecoration: 'none', color: 'green' }} >Pantalones</NavLink>
                        </li>
                        <li className="nav-item p-3 m-1 border-bottom">
                            <NavLink to='/categoria/zapatillas' style={{ textDecoration: 'none', color: 'green' }} >Zapatillas</NavLink>
                        </li>

                    </ul>


                </div>
                <NavLink to='/cart'>
                    <CartWidget />
                </NavLink>
            </div>
        </nav>
    )
}

export default NavBar

