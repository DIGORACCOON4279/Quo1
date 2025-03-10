import './SignOut.css';
import HeaderSignOut from '../HeaderSignOut/HeaderSignOut';
import FooterProfile from '../FooterProfile/FooterProfile';
import Loader from '../Loader/Loader';

import { Link } from "react-router-dom";

const SignOut = () => {
    return (
        <body className="bodySignOut">
            <Loader/>
            <HeaderSignOut/>
            <main className="containerFarewell">
                <section className="farewellSection">
                    <h2 className="titleSection">Gracias por usar y confiar en nosotros te esperamos nuevamente</h2>
                    <img src="/img/ilustracionDespedida.webp" alt="Ilustration Farewell" className="ilustracion"/>
                    <Link to="/" className="goToHome">Retornar al inicio</Link>
                </section>
            </main>
            <FooterProfile/>
        </body>
    )
}

export default SignOut
