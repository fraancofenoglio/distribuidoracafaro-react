const SectionReparto = () => {
  return (
    <section className="reparto" id="zonas">

        <h3>Zonas de <span>reparto</span></h3>

        <div className="ciudades-reparto">

            <p>
                ►  Bragado  •  Chivilcoy  •  25 de Mayo ◄ 
            </p>

            <p>
                ¡También en cuarteles!
            </p>

        </div>

        <div className="mapa-reparto">
            
            <iframe title="reparto" width="425" height="350" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-61.02355957031251%2C-35.36441589327595%2C-60.11718750000001%2C-34.869031702008634&amp;layer=mapnik" style={{border: "1px solid #EB5E28"}}></iframe><br/><small><a href="https://www.openstreetmap.org/#map=11/-35.1171/-60.5704" target="_blank" rel="noreferrer" >Ver mapa más grande</a></small>

        </div>

    </section>
  )
}

export default SectionReparto