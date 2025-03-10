import './AcademyProfile.css';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import FooterProfile from '../FooterProfile/FooterProfile';
import LinkProfile from '../LinkProffile/LinkProfile';

const AcademyProfile = () => {
    return (
        <body className="bodyAcademyProfile">
            <HeaderProfile/>
            <main className="containerAcademyCripto">
                <LinkProfile/>
                <section className="academyCriptoSection">
                    <section className="heading">
                        <h2 className="titleSection">Bienvenido a Academia Cripto</h2>
                        <p className="sentence">Aprende, mejora y crece con nuestra academia</p>
                        <div className="hightlightMessage">
                            <p className="advertising">¡Comienza ahora!</p>
                            <div className="greenLight"></div>
                        </div>
                    </section>
                    <section className="academySlider">
                        <section className="card">
                            <div className="headingCard">
                                <img className="imageCard" src="/img/ilustracionAcademia06.webp" alt="Ilustración"/>
                            </div>
                            <div className="bodyCard">
                                <h3 className="titleCard">Introducción a las Criptos</h3>
                            </div>
                            <div className="footerCard">
                                <img src="/img/avatarAcademia06.svg" alt="" className="avatar"/>
                                <p className="content">Entiende los fundamentos
                                </p>
                                <img src="/img/flechaIconos02.svg" alt="Arrow right" className="arrowRight"/>
                            </div>
                        </section>
                        <section className="card">
                            <div className="headingCard">
                                <img className="imageCard" src="/img/ilustracionAcademia05.webp" alt="Ilustración"/>
                            </div>
                            <div className="bodyCard">
                                <h3 className="titleCard">Blockchain y Seguridad</h3>
                            </div>
                            <div className="footerCard">
                                <img src="/img/avatarAcademia05.svg" alt="" class="avatar"/>
                                <p className="content">La tecnología en las criptos
                                </p>
                                <img src="/img/flechaIconos02.svg" alt="Arrow right" class="arrowRight"/>
                            </div>
                        </section>
                        <section className="card">
                            <div className="headingCard">
                                <img className="imageCard" src="/img/ilustracionAcademia04.webp" alt="Ilustración"/>
                            </div>
                            <div className="bodyCard">
                                <h3 className="titleCard">Análisis de Mercado</h3>
                            </div>
                            <div className="footerCard">
                                <img src="/img/avatarAcademia04.svg" alt="" className="avatar"/>
                                <p className="content">Interpreta tendencias y datos
                                </p>
                                <img src="/img/flechaIconos02.svg" alt="Arrow right" className="arrowRight"/>
                            </div>
                        </section>
                        <section className="card">
                            <div className="headingCard">
                                <img className="imageCard" src="/img/ilustracionAcademia03.webp" alt="Ilustración"/>
                            </div>
                            <div className="bodyCard">
                                <h3 className="titleCard">Técnicas de Trading</h3>
                            </div>
                            <div className="footerCard">
                                <img src="/img/avatarAcademia03.svg" alt="" className="avatar"/>
                                <p className="content">Compra, vende y optimiza
                                </p>
                                <img src="/img/flechaIconos02.svg" alt="Arrow right" className="arrowRight"/>
                            </div>
                        </section>
                        <section className="card">
                            <div className="headingCard">
                                <img className="imageCard" src="/img/ilustracionAcademia02.webp" alt="Ilustración"/>
                            </div>
                            <div className="bodyCard">
                                <h3 className="titleCard">Finanzas Descentralizadas</h3>
                            </div>
                            <div className="footerCard">
                                <img src="/img/avatarAcademia02.svg" alt="" className="avatar"/>
                                <p className="content">Más allá de las inversiones
                                </p>
                                <img src="/img/flechaIconos02.svg" alt="Arrow right" className="arrowRight"/>
                            </div>
                        </section>
                        <section className="card">
                            <div className="headingCard">
                                <img className="imageCard" src="/img/ilustracionAcademia01.webp" alt="Ilustración"/>
                            </div>
                            <div className="bodyCard">
                                <h3 className="titleCard">Simulación y Práctica</h3>
                            </div>
                            <div className="footerCard">
                                <img src="/img/avatarAcademia01.svg" alt="" className="avatar"/>
                                <p className="content">Invierte sin riesgos
                                </p>
                                <img src="/img/flechaIconos02.svg" alt="Arrow right" className="arrowRight"/>
                            </div>
                        </section>
                    </section>
                </section>
            </main>
            <FooterProfile/>
        </body>
    )
}

export default AcademyProfile
