import './Portfolio.css';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import FooterProfile from '../FooterProfile/FooterProfile';
import { Link } from "react-router-dom";


const Portfolio = () => {
    return (
        <body className="bodyPortfolio">
            <HeaderProfile/>
            <main className="containerPortfolio">
                <section className="PortfolioSection">
                    <h2 className="titleSection">Ninguna compra y/o venta realizada en tu portfolio aun </h2>
                    <img src="../img/ilustracionPorfolio.webp" alt="Ilustracion Portfolio" className="ilustracion"/>
                    <p className="sentence">Si deseas comenzar te invitamos a nuestra academia </p>
                    <Link to="../academyProfile" className="ctaAcademy">Academia Cripto</Link>
                </section>
            </main>
            <FooterProfile/>
        </body>
    )
}

export default Portfolio
