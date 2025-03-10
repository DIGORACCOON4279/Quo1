import './Setting.css';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import FooterProfile from '../FooterProfile/FooterProfile';
import LinkProfile from '../LinkProffile/LinkProfile';


const Setting = () => {
    return (
        <body className="bodySetting">
            <HeaderProfile/>
            <main className="container containerSetting">
                <LinkProfile/>
                <section className="settingSection">
                    <div className="settingCenter">

                        <section className="heading">
                            <h2 className="titleSetting">Actualiza tu email y password</h2>
                            <p className="content">Mantén tu cuenta segura y actualizada.
                            </p>
                        </section>

                        <section className="settingBlock">
                            <section className="card">
                                <div className="headingCard">
                                    <h3 className="titleCard">Email</h3>
                                    <div className="bodyCard">
                                        <p className="nameUser">carolina@mail.com</p>
                                        <img className="icon" src="/img/iconoOjoCerrado.svg" alt="Ilustración"/>
                                    </div>
                                </div>
                                <div className="footerCard">
                                    <button className="btn btnUpdate" type="button">Actualizar</button>
                                </div>
                            </section>
                            <section className="card">
                                <div className="headingCard">
                                    <h3 className="titleCard">Password</h3>
                                    <div className="bodyCard">
                                        <p className="nameUser">***************</p>
                                        <img className="icon" src="/img/iconoOjoCerrado.svg" alt="Ilustración"/>
                                    </div>
                                </div>
                                <div className="footerCard">
                                    <button class="btn btnUpdate" type="button">Actualizar</button>
                                </div>
                            </section>
                            <section className="card">
                                <div className="headingCard">
                                    <h3 className="titleCard">Dar de baja mi cuenta</h3>
                                    <div className="bodyCard">
                                        <img className="icon" src="/img/iconoEliminar.svg" alt="Ilustración"/>
                                    </div>
                                </div>
                                <div className="footerCard">
                                    <button class="btn btndelete"type="button">Emilinar mi cuenta</button>
                                </div>
                            </section>
                        </section>
                    </div>
                </section>
            </main>
            <FooterProfile/>
        </body>
    )
}

export default Setting
