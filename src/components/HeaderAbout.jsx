const HeaderAbout = () => {
  return (
    <>
    <header>
        <div className="header-img">

            <img src="./assets/fiambres2.jpeg" alt="fiambres varios"/>
        </div>

        <h2>Abastecé <span>tu negocio</span> con los mejores productos.</h2>
        
    </header>

    <section className="about-us">
        
        <h3>Sobre <span>nosotros</span></h3>

        <img className="about-logo" src="./assets/logo-cafaro3.png" alt="logo Distribuidora Cafaro"/>
        
        <div className="presentacion">
            <p>
                Somos una empresa dedicada al abastecimiento de despensas y autoservicios de la zona. Te brindamos excelentes productos que van desde fiambres y quesos hasta galletitas y fideos.
            </p>
        </div>

        <div className="catalogo">
            <button>
                <a target="_blank" href="https://wa.me/5492342481304/?text=Hola,%20me%20gustaría%20que%20me%20pases%20el%20catálogo%20de%20productos" rel="noreferrer">Consultar Catálogo</a>
            </button>
        </div>

    </section>
    </>
  )
}

export default HeaderAbout