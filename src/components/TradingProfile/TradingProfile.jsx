

import HeaderProfile from '../HeaderProfile/HeaderProfile';
import LinkProfile from '../LinkProfile/LinkProfile';
import FooterProfile from '../FooterProfile/FooterProfile';
import { Link } from "react-router-dom";
import './TradingProfile.css';

const TradingProfile = () => {
    return (
        <main class="bodyTradingProfile">
            <HeaderProfile />
            <div className="containerTradingProfile">
                <LinkProfile />
                <section className="tradingProfileSection">
                    <section className="heading">
                        <h2 className="titleSection">Cotización Bitcoin</h2>
                        <p className="sentence">Comenzaremos con la simulación</p>
                    </section>
                    <section className="cardBlock">
                        <div className="cards">
                            <div className="card">
                                <p className="titleCard">Precio de Compra</p>
                                <p className="time">Hoy: <span className="number"> $1.940.000 MXN</span></p>
                                <p className="time">Ayer: <span className="number">$7.893.000 MXN</span></p>
                                <div>
                                    <Link to="#" className="btn_tarjetas btn_grey">Comprar</Link>
                                </div>
                            </div>
                            <div className="card">
                                <p className="titleCard">Precio de Venta</p>
                                <p className="time">Hoy: <span className="number">$1.918.500 MXN</span></p>
                                <p className="time">Ayer: <span className="number">$7.872.000 MXN</span></p>
                                <div>
                                    <Link to="#" className="btn_tarjetas btn_grey">Vender</Link>
                                </div>
                            </div>
                            <div className="card variation">
                                <p className="titleCard">Variación</p>
                                <p className="percentage">+ 2.5%</p>
                            </div>
                        </div>
                    </section>
                    <section className="comparationGraphic">
                        <p className="titleCard">Compra</p>
                        <div className="cards">
                            <div className="card">
                                <p className="item"><span className="ciudad">Mexico</span></p>
                                <p className="item"><span className="peq">Bitcoin</span> <span className="por_var">BTC</span></p>
                                <p className="item"><span className="peq">Precio BTC_Mex</span></p>
                                <p className="item"><span className="num_big">$1.940.000</span></p>
                                <p className="item"><span className="peq">$1.918.500 </span> <span className="por_var">+2.5%</span></p>
                            </div>
                            <div className="graphicBlock">
                                <img className="graphic" src="/img/bitcoinGraphic.webp" alt="Ilustration"/>
                            </div>
                        </div>
                    </section>
                </section>
                <div className="goToDashboard">
                    <Link className="linkToDashboard" to="../dashboardProfile">Retornar dashboard</Link>
                </div>
            </div>
            <FooterProfile />
        </main>
    )
}

export default TradingProfile
