

import HeaderProfile from '../HeaderProfile/HeaderProfile';
import LinkProfile from '../LinkProfile/LinkProfile';
import FooterProfile from '../FooterProfile/FooterProfile';
import { Link } from "react-router-dom";
import "./PortfolioMomentaneo.css"

const PortfolioMomentaneo = () => {


    return (
        <main class="bodyProfileMomentaneo">
        <HeaderProfile />
        <div className="containerProfileMomentaneo">
            <LinkProfile />
            <section className="ProfileMomentaneoSection">
                <section className="heading">
                    <h2 className="titleSection">Portfolio</h2>
                    <p className="sentence">Comenzaremos con la simulación</p>
                </section>
                <section className="cardBlock">
                    <div className="cards">
                        <div className="card">
                            <p className="titleCard">Precio de Compra</p>
                            <div className="bunchText">
                                <div className="column">
                                    <p className="time">Hoy:</p>
                                    <p className="time">Ayer:</p>
                                </div>
                                <div className="column">
                                    <p className="number">$1.940.000 MXN</p>
                                    <p className="number">$7.893.000 MXN</p>
                                </div>
                            </div>
                            <div>
                                <Link to="../balance" className="btn btnWhite">Comprar</Link>
                            </div>
                        </div>
                        <div className="card" id="cardSell">
                            <p className="titleCard">Precio de Venta</p>
                            <div className="bunchText">
                                <div className="column">
                                    <p className="time">Hoy:</p>
                                    <p className="time">Ayer:</p>
                                </div>
                                <div className="column">
                                    <p className="number">$1.918.500 MXN</p>
                                    <p className="number">$7.872.000 MXN</p>
                                </div>
                            </div>
                            <div>
                                <Link to="#" className="btns btnGrey">Vender</Link>
                            </div>
                        </div>
                        <div className="card" id="variation">
                            <p className="titleCard">Variación</p>
                            <p className="percentage">+2.5%</p>
                        </div>
                    </div>
                </section>
                <section className="comparationGraphic">
                    <p className="titleCard">Compra</p>
                    <div className="cards">
                        <div className="card">
                            <p className="city">Mexico</p>
                            <div className="bunchCripto">
                                <img src="/img/isotipoCriptoDashboard09.svg" alt="Cripto" className="imageCripto" />
                                <p className="item">Bitcoin<span className="acronism"> BTC</span></p>
                            </div>
                            <p className="price">Precio BTC_Mex</p>
                            <p className="numberOne">$1.940.000</p>
                            <p className="numberTwo">$1.918.500<span className="percentage">+2.5%</span></p>
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

export default PortfolioMomentaneo
