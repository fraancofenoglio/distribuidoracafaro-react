import { HashLink } from "react-router-hash-link";

const NavDesktop = () => {
  return (
    <nav>
        <div>
            <a href="/">
                
                <img className="main-logo" src="./assets/logo-cafaro3.png" alt="logo Distribuidora Cafaro"/>
            </a>

        </div>

        <div className="nav-desktop">

            <div>
                <HashLink smooth to="/" >
                    Inicio
                </HashLink>
            </div>
    
            <div>
                <HashLink smooth to="#marcas" >
                    Marcas
                </HashLink>
            </div>
    
            <div>
                <HashLink  smooth to="#zonas" >
                    Zonas
                </HashLink>
            </div>

            <div>
                <HashLink smooth to="#contacto" >
                    Contacto
                </HashLink>
            </div>
        </div>
    </nav>
  )
}

export default NavDesktop