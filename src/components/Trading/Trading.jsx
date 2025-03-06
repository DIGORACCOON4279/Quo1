import './Trading.css';

const Trading = () => {
    return (
        <section class="tradingSection" id="tradingSection">
            <div class="tradingCenter">
                <section class="card">
                    <div class="headingCard">
                        <h2 class="titleSection">Domina el Trading sin Riesgos</h2>
                        <p class="text">Prueba estrategias en tiempo real con nuestro simulador sin arriesgar dinero real</p>
                    </div>
                    <div class="imageScreenshot">
                        <img src="/img/pantallaTrading1.webp" alt="Screenshot" class="screenshot"/>
                    </div>
                </section>
                <section class="card">
                    <div class="headingCard">
                        <h2 class="titleSection">Simula, Analiza y Gana Experiencia</h2>
                        <p class="text">Compra y vende criptos fácilmente con cotizaciones actualizadas y seguimiento de tus movimientos.</p>
                    </div>
                    <div class="imageScreenshot">
                        <img src="/img/pantallaTrading2.webp" alt="Screenshot" class="screenshot"/>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Trading
