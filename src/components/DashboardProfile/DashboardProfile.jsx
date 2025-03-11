import cryptocurrencies from '../../data/cryptocurrencies';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import LinkProfile from '../LinkProfile/LinkProfile';
import FooterProfile from '../FooterProfile/FooterProfile';
import './DashboardProfile.css';

const DashboardProfile = () => {
    return (
        <body className="bodyDashboard">
            <HeaderProfile />
            <main className="containerDashboard">
                <LinkProfile />
                <section className="dashboardSection">
                    <section className="heading">
                        <h2 className="titleSection">Hola Carolina</h2>
                        <p className="sentence">Comenzaremos con la simulación</p>
                    </section>
                    <section className="initialBalance">
                        <h3 className="titleBalance">Saldo inicial</h3>
                        <h3 className="balance">$1000 USD</h3>
                    </section>
                    <section className="criptoCurrency">
                        <h3 className="titleBalance">Cripto monedas top</h3>
                        <div className="cryptoTable">
                            <section className="lineTitles">
                                <h4 className="titleTable">Cripto</h4>
                                <h4 className="titleTable">USD</h4>
                                <h4 className="titleTable">%</h4>
                            </section>

                            <input type="checkbox" id="toggleCrypto" />

                            <section className="lineCriptos">
                                {cryptocurrencies.map((crypto, index) => (
                                    <div className="cripto" key={index}>
                                        <p className="item">
                                            <img src={crypto.icon} alt={crypto.name} width="22" height="22" style={{ marginRight: "8px" }} />
                                            {crypto.name}
                                        </p>
                                        <p className="item">{crypto.price}</p>
                                        <p className="item" style={{ color: crypto.change.includes('-') ? '#FF0000' : '#00DA4F', fontWeight: 'bold' }}>
                                            {crypto.change}
                                        </p>
                                    </div>
                                ))}
                            </section>

                            <label for="toggleCrypto" className="toggleLabel">
                                <img src="/img/iconoFlechaPlan.svg" alt="Icon arrow" className="arrow"/>
                            </label>
                        </div>
                    </section>
                </section>
            </main>
            <FooterProfile />
        </body>
    );
};

export default DashboardProfile;
