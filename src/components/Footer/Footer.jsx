import React from 'react'
import { Link } from '@mui/material'

export default function Footer() {
    return (
        <div className="container-fluid p-3 bg-black fixed-bottom">
            <div className='row'>
                <div className='col-sm-12 col-md-6 text-center' style={{ color: '#fff' }}>
                    <h5>© 2022</h5>
                    <p>Javier Simon, todos los derechos reservados.</p>

                </div>

                <div className='col-sm-12 col-md-6 text-center'>
                    <h5 style={{ color: '#fff' }}>Redes sociales</h5>

                    <Link href='https://www.facebook.com/' target='_blank'>
                        <button className='btn btn-primary m-1'>
                            <i className="bi bi-facebook"></i>
                        </button>
                    </Link>

                    <Link href='https://www.instagram.com/' target='_blank'>
                        <button className='btn btn-danger m-1'>
                            <i className="bi bi-instagram"></i>
                        </button>
                    </Link>

                    <Link href='https://web.whatsapp.com/' target='_blank'>
                        <button className='btn btn-success m-1'>
                            <i className="bi bi-whatsapp"></i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
