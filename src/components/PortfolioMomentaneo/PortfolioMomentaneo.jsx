

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
                <section className="profileMomentaneoSection">
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
                    <section className="transactionBlock">

                        <div className="headingTransaction">
                            <h3 className="titleTransaction">Historial de transacciones</h3>
                        </div>

                        <div className="transactionTable">
                            <section className="lineTitles">
                                <h4 className="titleTable">Fecha y hora</h4>
                                <h4 className="titleTable">Tipo de operación</h4>
                                <h4 className="titleTable">Cantida y precio</h4>
                                <h4 className="titleTable">Estado</h4>
                            </section>

                            <input type="checkbox" id="toggleTransaction" />
                            <section className="lineTransaction">


                                        <div className="transactionPlace">
                                            <p className="item">Hola</p>
                                            <p className="item">Hola</p>
                                            <p className="item">Hola</p>
                                            <p className="item">Hola</p>
                                        </div>


                            </section>

                            <label htmlFor="toggleTransaction" className="toggleLabel">
                                <img src="/img/iconoFlechaPlan.svg" alt="Icon arrow" className="arrow"/>
                            </label>
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
