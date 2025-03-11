
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import LinkProfile from '../LinkProfile/LinkProfile';
import FooterProfile from '../FooterProfile/FooterProfile';
import './DashboardProfile.css';

const DashboardProfile = () => {
console.log("Hola")

    return (
        <body className="bodyDashboardProfile">
            <HeaderProfile/>
            <main className="containerDashboardProfile">
                <LinkProfile/>
                <section className="dashboardSection">
                    <section className="heading">
                        <h2 className="titleSection">Hola Carolina</h2>
                        <p className="sentence">Comenzaremos con la simulación</p>
                    </section>

                </section>
            </main>
            <FooterProfile/>
        </body>
    )
}

export default DashboardProfile
