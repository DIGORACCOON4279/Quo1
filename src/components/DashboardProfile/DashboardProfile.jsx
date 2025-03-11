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
                        <table className="cryptoTable">
                            <thead>
                                <tr>
                                    <th>Cripto</th>
                                    <th>USD</th>
                                    <th>%</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cryptocurrencies.map((crypto, index) => (
                                    <tr key={index}>
                                        <td>
                                            <img src={crypto.icon} alt={crypto.name} width="22" height="22" style={{ marginRight: "8px" }} />
                                            {crypto.name}
                                        </td>
                                        <td>{crypto.price}</td>
                                        <td style={{ color: crypto.change.includes('-') ? '#FF0000' : '#00DA4F', fontWeight: 'bold' }}>
                                            {crypto.change}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                </section>
            </main>
            <FooterProfile />
        </body>
    );
};

export default DashboardProfile;
