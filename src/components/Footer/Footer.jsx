import React from 'react'

export default function Footer() {
    return (
        <div className='container-fluid p-3 bg-black'>
            <div className='row'>
                <div className='col-sm-12 col-md-6 text-center' style={{color:'#fff'}}>
                    <h5>© 2022</h5>  
                    <p>Javier Simon, todos los derechos reservados.</p>   

                </div>

                <div className='col-sm-12 col-md-6 text-center'>
                    <h5 style={{color:'#fff'}}>Redes sociales</h5>
                    <button className='btn btn-primary m-1'>
                        <i className="bi bi-facebook"></i>
                    </button>
                    <button className='btn btn-danger m-1'>
                        <i className="bi bi-instagram"></i>
                    </button>
                    <button className='btn btn-success m-1'>
                        <i className="bi bi-whatsapp"></i>
                    </button>
                </div>
            </div>

        </div>
    )
}
