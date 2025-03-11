import './AcademyProfile.css';
import HeaderProfile from '../HeaderProfile/HeaderProfile';
import FooterProfile from '../FooterProfile/FooterProfile';
import LinkProfile from '../LinkProfile/LinkProfile';
import ArticleList from '../ArticleList/ArticleList';

const AcademyProfile = () => {
    return (
        <body className="bodyAcademyProfile">
            <HeaderProfile/>
            <main className="containerAcademyCripto">
                <LinkProfile/>
                <section className="academyCriptoSection">
                    <section className="heading">
                        <h2 className="titleSection">Bienvenido a Academia Cripto</h2>
                        <p className="sentence">Aprende, mejora y crece con nuestra academia</p>
                        <div className="hightlightMessage">
                            <p className="advertising">¡Comienza ahora!</p>
                            <div className="greenLight"></div>
                        </div>
                    </section>
                    <ArticleList/>
                </section>
            </main>
            <FooterProfile/>
        </body>
    )
}

export default AcademyProfile
