
import './Welcome.css';
import { Link } from "react-router-dom";


const Welcome = () => {
    return (
        <section className="container containerWelcome">
            <section className="welcomeSection">
                <h2 className="titleSection">Bienvenido a tu perfil de Quo</h2>
                <img src="/img/ilustracionBienvenida.webp" alt="Ilustracion bienvenida" className="ilustracion"/>
                <p className="sentence">Si deseas comenzar te invitamos a nuestra academia </p>
                <Link to="../academyProfile" className="ctaAcademy">Academia Cripto</Link>
            </section>

        </section>
    )
}

export default Welcome
