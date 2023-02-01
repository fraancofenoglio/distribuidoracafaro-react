import { useState } from "react"
import { HashLink } from "react-router-hash-link"

const NavMobile = () => {

    const [open, setOpen] = useState(false)

  return (
    <div className="nav-mobile">
        
        <div id="main-container-hamburguer">
    
            <div id="hamburguer">
                <button onClick={() => setOpen(!open)} id="hb-btn" className={open ? "open" : ""}>
                    <span className="topline"></span>
                    <span className="middleline"></span>
                    <span className="bottomline"></span>
    
                    <ul className={open ? "mostrarMenu ul-menu" : "ul-menu"} id="menu">
                        <li className="list-menu">
                            <HashLink className="link-list-menu" smooth to="/" >
                                Inicio
                            </HashLink>
                        </li>
        
                        <li className="list-menu">
                            <HashLink className="link-list-menu" smooth to="#marcas" >
                                Marcas
                            </HashLink>
                        </li>

                        <li className="list-menu">
                            <HashLink className="link-list-menu" smooth to="#zonas" >
                                Zonas
                            </HashLink>
                        </li>

                        <li className="list-menu">
                            <HashLink className="link-list-menu" smooth to="#contacto" >
                                Contacto
                            </HashLink>
                        </li>
                    </ul>
    
                </button>
    
            </div>
    
        </div>

        <div className="name">
            <img className="main-logo" src="./assets/logo-cafaro3.png" alt="logo Distribuidora Cafaro"/>
        </div>
        
    </div>
  )
}

export default NavMobile