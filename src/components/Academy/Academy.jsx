// import './Academy.css'

// const Academy = () => {
//     return (
//         <section className="academySection" id="academySection">
//             <div className="academyCenter">
//                 <div className="heading">
//                     <h1 className="titleSection">Academia QUO</h1>
//                     <p className="text">Descubre, aprende y practica con nuestra academia cripto. Desde los conceptos básicos
//                     hasta estrategias avanzadas.</p>
//                     <div className="infoBlock">
//                         <div className="features">
//                             <img src="/img/circleCheckVerde.svg" alt="Check" className="check"/>
//                             <p className="option">Cursos interactivos sobre blockchain, trading y análisis de mercado</p>
//                         </div>
//                         <div className="features">
//                             <img src="/img/circleCheckVerde.svg" alt="Check" className="check"/>
//                             <p className="option">Simulaciones en tiempo real para poner en práctica lo aprendido</p>
//                         </div>
//                         <div className="features">
//                             <img src="/img/circleCheckVerde.svg" alt="Check" className="check"/>
//                             <p className="option">Empieza gratis y conviértete en un experto en inversión cripto sin riesgos</p>
//                         </div>
//                         <div className="features">
//                             <img src="/img/circleCheckVerde.svg" alt="Check" className="check"/>
//                             <p className="option">Artículos y guías sobre tendencias y novedades del mercado</p>
//                         </div>
//                         <div className="features">
//                             <img src="/img/circleCheckVerde.svg" alt="Check" className="check"/>
//                             <p className="option">Webinars y mentorías con expertos del ecosistema cripto</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="academyBlock">
//                     <section className="hightlightMessage">
//                         <p className="advertising">¡Comienza ahora!</p>
//                         <div className="greenLight"></div>
//                     </section>
//                     <section className="academySlider">
//                         <div className="cardSlider">
//                             <section className="card">
//                                 <div className="headingCard">
//                                     <img className="imageCard" src="/img/imagenAcademia01.webp" alt="Ilustración"/>
//                                 </div>
//                                 <div className="bodyCard">
//                                     <h3 className="titleCard">Introducción a las Criptos</h3>
//                                     <p className="content">Aprende qué son las criptomonedas, cómo funcionan y por
//                                         qué están revolucionando las finanzas
//                                     </p>
//                                 </div>
//                                 <div className="footerCard">
//                                     <img src="img/avatarAcademia06.svg" alt="" className="avatar"/>
//                                     <p className="content">Entiende los fundamentos
//                                     </p>
//                                     <img src="/img/flechaIconos02.svg" alt="Arrow right" className="arrowRight"/>
//                                 </div>
//                             </section>
//                             <section className="card">
//                                 <div className="headingCard">
//                                     <img className="imageCard" src="/img/imagenAcademia02.webp" alt="Ilustración"/>
//                                 </div>
//                                 <div className="bodyCard">
//                                     <h3 className="titleCard">Blockchain y Seguridad</h3>
//                                     <p className="content">Descubre cómo funciona el blockchain, qué lo hace seguro
//                                         y qué es clave en las transacciones
//                                     </p>

//                                 </div>
//                                 <div className="footerCard">
//                                     <img src="/img/avatarAcademia05.svg" alt="" className="avatar"/>
//                                     <p className="content">La tecnología en las criptos
//                                     </p>
//                                     <img src="/img/flechaIconos02.svg" alt="Arrow right" className="arrowRight"/>
//                                 </div>
//                             </section>
//                             <section className="card">
//                                 <div className="headingCard">
//                                     <img className="imageCard" src="/img/imagenAcademia03.webp" alt="Ilustración"/>
//                                 </div>
//                                 <div className="bodyCard">
//                                     <h3 className="titleCard">Análisis de Mercado</h3>
//                                     <p className="content">Aprende a leer gráficos, detectar patrones y tomar decisiones
//                                         informadas en el mundo cripto
//                                     </p>
//                                 </div>
//                                 <div className="footerCard">
//                                     <img src="/img/avatarAcademia04.svg" alt="" className="avatar"/>
//                                     <p className="content">Interpreta tendencias y datos
//                                     </p>
//                                     <img src="/img/flechaIconos02.svg" alt="Arrow right" className="arrowRight"/>
//                                 </div>
//                             </section>
//                             <section className="card">
//                                 <div className="headingCard">
//                                     <img className="imageCard" src="/img/imagenAcademia04.webp" alt="Ilustración"/>
//                                 </div>
//                                 <div className="bodyCard">
//                                     <h3 className="titleCard">Técnicas de Trading</h3>
//                                     <p className="content">Conoce técnicas de trading, gestión de riesgos y cómo
//                                         maximizar oportunidades
//                                     </p>
//                                 </div>
//                                 <div className="footerCard">
//                                     <img src="/img/avatarAcademia03.svg" alt="" className="avatar"/>
//                                     <p className="content">Compra, vende y optimiza
//                                     </p>
//                                     <img src="/img/flechaIconos02.svg" alt="Arrow right" class="arrowRight"/>
//                                 </div>
//                             </section>
//                             <section className="card">
//                                 <div className="headingCard">
//                                     <img className="imageCard" src="/img/imagenAcademia05.webp" alt="Ilustración"/>
//                                 </div>
//                                 <div className="bodyCard">
//                                     <h3 className="titleCard">Finanzas Descentralizadas</h3>
//                                     <p className="content">Explora las posibilidades de DeFi, desde préstamos
//                                         hasta staking
//                                     </p>
//                                 </div>
//                                 <div class="footerCard">
//                                     <img src="img/avatarAcademia02.svg" alt="" class="avatar"/>
//                                     <p className="content">Más allá de las inversiones
//                                     </p>
//                                     <img src="/img/flechaIconos02.svg" alt="Arrow right" class="arrowRight"/>
//                                 </div>
//                             </section>
//                             <section className="card">
//                                 <div className="headingCard">
//                                     <img className="imageCard" src="/img/imagenAcademia06.webp" alt="Ilustración"/>
//                                 </div>
//                                 <div className="bodyCard">
//                                     <h3 className="titleCard">Simulación y Práctica</h3>
//                                     <p className="content">Pon a prueba lo aprendido en un entorno seguro con $1000
//                                         virtuales para experimentar sin miedo
//                                     </p>
//                                 </div>
//                                 <div className="footerCard">
//                                     <img src="/img/avatarAcademia01.svg" alt="" className="avatar"/>
//                                     <p className="content">Invierte sin riesgos
//                                     </p>
//                                     <img src="/img/flechaIconos02.svg" alt="Arrow right" className="arrowRight"/>
//                                 </div>
//                             </section>
//                         </div>
//                         <div class="directionArrows">
//                             <img className="arrow" id="previousCard" src="/img/flechaIconos01.svg" alt="Arrow left"/>
//                             <img className="arrow" id="nextCard" src="/img/flechaIconos02.svg" alt="Arrow Right"/>
//                         </div>
//                     </section>
//                 </div>
//             </div>

//         </section>
//     )
// }

// export default Academy


// La mejor opcion

// import { useState, useEffect, useRef } from "react";
// import "./Academy.css";

// const Academy = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const cardSliderRef = useRef(null);
//   const autoSlideInterval = useRef(null);

//   const cards = [
//     {
//       img: "/img/imagenAcademia01.webp",
//       title: "Introducción a las Criptos",
//       content: "Aprende qué son las criptomonedas, cómo funcionan y por qué están revolucionando las finanzas",
//       avatar: "/img/avatarAcademia06.svg",
//       footer: "Entiende los fundamentos"
//     },
//     {
//       img: "/img/imagenAcademia02.webp",
//       title: "Blockchain y Seguridad",
//       content: "Descubre cómo funciona el blockchain, qué lo hace seguro y qué es clave en las transacciones",
//       avatar: "/img/avatarAcademia05.svg",
//       footer: "La tecnología en las criptos"
//     },
//     {
//       img: "/img/imagenAcademia03.webp",
//       title: "Análisis de Mercado",
//       content: "Aprende a leer gráficos, detectar patrones y tomar decisiones informadas en el mundo cripto",
//       avatar: "/img/avatarAcademia04.svg",
//       footer: "Interpreta tendencias y datos"
//     },
//     {
//       img: "/img/imagenAcademia04.webp",
//       title: "Técnicas de Trading",
//       content: "Conoce técnicas de trading, gestión de riesgos y cómo maximizar oportunidades",
//       avatar: "/img/avatarAcademia03.svg",
//       footer: "Compra, vende y optimiza"
//     },
//     {
//       img: "/img/imagenAcademia05.webp",
//       title: "Finanzas Descentralizadas",
//       content: "Explora las posibilidades de DeFi, desde préstamos hasta staking",
//       avatar: "/img/avatarAcademia02.svg",
//       footer: "Más allá de las inversiones"
//     },
//     {
//       img: "/img/imagenAcademia06.webp",
//       title: "Simulación y Práctica",
//       content: "Pon a prueba lo aprendido en un entorno seguro con $1000 virtuales para experimentar sin miedo",
//       avatar: "/img/avatarAcademia01.svg",
//       footer: "Invierte sin riesgos"
//     }
//   ];

//   const totalSlides = cards.length;

//   const updateSlider = () => {
//     if (cardSliderRef.current) {
//       const cardWidth = cardSliderRef.current.children[0].offsetWidth;
//       const offset = -(currentIndex * (cardWidth + 80)); // 80px es el gap
//       cardSliderRef.current.style.transform = `translateX(${offset}px)`;
//     }
//   };

//   const moveSlide = (direction) => {
//     setCurrentIndex((prevIndex) => {
//       const newIndex = prevIndex + direction;
//       if (newIndex < 0) return totalSlides - 1;
//       if (newIndex >= totalSlides) return 0;
//       return newIndex;
//     });
//     resetAutoSlide();
//   };

//   const startAutoSlide = () => {
//     autoSlideInterval.current = setInterval(() => moveSlide(1), 5000);
//   };

//   const resetAutoSlide = () => {
//     clearInterval(autoSlideInterval.current);
//     startAutoSlide();
//   };

//   useEffect(() => {
//     updateSlider();
//   }, [currentIndex]);

//   useEffect(() => {
//     startAutoSlide();
//     return () => clearInterval(autoSlideInterval.current);
//   }, []);

//   return (
//     <section className="academySection" id="academySection">
//       <div className="academyCenter">
//         <div className="heading">
//           <h1 className="titleSection">Academia QUO</h1>
//           <p className="text">Descubre, aprende y practica con nuestra academia cripto. Desde los conceptos básicos hasta estrategias avanzadas.</p>
//           <div className="infoBlock">
//             {[
//               "Cursos interactivos sobre blockchain, trading y análisis de mercado",
//               "Simulaciones en tiempo real para poner en práctica lo aprendido",
//               "Empieza gratis y conviértete en un experto en inversión cripto sin riesgos",
//               "Artículos y guías sobre tendencias y novedades del mercado",
//               "Webinars y mentorías con expertos del ecosistema cripto"
//             ].map((option, index) => (
//               <div className="features" key={index}>
//                 <img src="/img/circleCheckVerde.svg" alt="Check" className="check" />
//                 <p className="option">{option}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="academyBlock">
//           <section className="hightlightMessage">
//             <p className="advertising">¡Comienza ahora!</p>
//             <div className="greenLight"></div>
//           </section>
//           <section className="academySlider">
//             <div className="cardSlider" ref={cardSliderRef}>
//               {cards.map((card, index) => (
//                 <section className="card" key={index}>
//                   <div className="headingCard">
//                     <img className="imageCard" src={card.img} alt="Ilustración" />
//                   </div>
//                   <div className="bodyCard">
//                     <h3 className="titleCard">{card.title}</h3>
//                     <p className="content">{card.content}</p>
//                   </div>
//                   <div className="footerCard">
//                     <img src={card.avatar} alt="" className="avatar" />
//                     <p className="content">{card.footer}</p>
//                     <img src="/img/flechaIconos02.svg" alt="Arrow right" className="arrowRight" />
//                   </div>
//                 </section>
//               ))}
//             </div>
//             <div className="directionArrows">
//               <img className="arrow" id="previousCard" src="/img/flechaIconos01.svg" alt="Arrow left" onClick={() => moveSlide(-1)} />
//               <img className="arrow" id="nextCard" src="/img/flechaIconos02.svg" alt="Arrow Right" onClick={() => moveSlide(1)} />
//             </div>
//           </section>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Academy;




// otra opcion


import { useState, useEffect, useRef } from "react";
import "./Academy.css";

const Academy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardSliderRef = useRef(null);
  const autoSlideInterval = useRef(null);

  const cards = [
    { img: "/img/imagenAcademia01.webp", title: "Introducción a las Criptos", content: "Aprende qué son las criptomonedas, cómo funcionan y por qué están revolucionando las finanzas", avatar: "/img/avatarAcademia06.svg", footer: "Entiende los fundamentos" },
    { img: "/img/imagenAcademia02.webp", title: "Blockchain y Seguridad", content: "Descubre cómo funciona el blockchain, qué lo hace seguro y qué es clave en las transacciones", avatar: "/img/avatarAcademia05.svg", footer: "La tecnología en las criptos" },
    { img: "/img/imagenAcademia03.webp", title: "Análisis de Mercado", content: "Aprende a leer gráficos, detectar patrones y tomar decisiones informadas en el mundo cripto", avatar: "/img/avatarAcademia04.svg", footer: "Interpreta tendencias y datos" },
    { img: "/img/imagenAcademia04.webp", title: "Técnicas de Trading", content: "Conoce técnicas de trading, gestión de riesgos y cómo maximizar oportunidades", avatar: "/img/avatarAcademia03.svg", footer: "Compra, vende y optimiza" },
    { img: "/img/imagenAcademia05.webp", title: "Finanzas Descentralizadas", content: "Explora las posibilidades de DeFi, desde préstamos hasta staking", avatar: "/img/avatarAcademia02.svg", footer: "Más allá de las inversiones" },
    { img: "/img/imagenAcademia06.webp", title: "Simulación y Práctica", content: "Pon a prueba lo aprendido en un entorno seguro con $1000 virtuales para experimentar sin miedo", avatar: "/img/avatarAcademia01.svg", footer: "Invierte sin riesgos" }
  ];

  const totalSlides = cards.length;

  const updateSlider = () => {
    if (cardSliderRef.current) {
      const cardWidth = cardSliderRef.current.children[0].offsetWidth;
      const offset = -(currentIndex * (cardWidth + 80)); // 80px es el gap
      cardSliderRef.current.style.transition = "transform 0.5s ease-in-out";
      cardSliderRef.current.style.transform = `translateX(${offset}px)`;
    }
  };

  const moveSlide = (direction) => {
    setCurrentIndex((prevIndex) => {
      let newIndex = prevIndex + direction;
      if (newIndex < 0) newIndex = totalSlides - 1;
      if (newIndex >= totalSlides) newIndex = 0;
      return newIndex;
    });
    resetAutoSlide();
  };

  const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
  };

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval.current);
    startAutoSlide();
  };

  useEffect(() => {
    updateSlider();
  }, [currentIndex]);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideInterval.current);
  }, []);

  return (
    <section className="academySection" id="academySection">
      <div className="academyCenter">
        <div className="heading">
          <h1 className="titleSection">Academia QUO</h1>
          <p className="text">Descubre, aprende y practica con nuestra academia cripto. Desde los conceptos básicos hasta estrategias avanzadas.</p>
          <div className="infoBlock">
            {[
              "Cursos interactivos sobre blockchain, trading y análisis de mercado",
              "Simulaciones en tiempo real para poner en práctica lo aprendido",
              "Empieza gratis y conviértete en un experto en inversión cripto sin riesgos",
              "Artículos y guías sobre tendencias y novedades del mercado",
              "Webinars y mentorías con expertos del ecosistema cripto"
            ].map((option, index) => (
              <div className="features" key={index}>
                <img src="/img/circleCheckVerde.svg" alt="Check" className="check" />
                <p className="option">{option}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="academyBlock">
          <section className="hightlightMessage">
            <p className="advertising">¡Comienza ahora!</p>
            <div className="greenLight"></div>
          </section>
          <section className="academySlider">
            <div className="cardSlider" ref={cardSliderRef}>
              {cards.map((card, index) => (
                <section className="card" key={index}>
                  <div className="headingCard">
                    <img className="imageCard" src={card.img} alt="Ilustración" />
                  </div>
                  <div className="bodyCard">
                    <h3 className="titleCard">{card.title}</h3>
                    <p className="content">{card.content}</p>
                  </div>
                  <div className="footerCard">
                    <img src={card.avatar} alt="" className="avatar" />
                    <p className="content">{card.footer}</p>
                    <img src="/img/flechaIconos02.svg" alt="Arrow right" className="arrowRight" />
                  </div>
                </section>
              ))}
            </div>
            <div className="directionArrows">
              <img className="arrow" id="previousCard" src="/img/flechaIconos01.svg" alt="Arrow left" onClick={() => moveSlide(-1)} />
              <img className="arrow" id="nextCard" src="/img/flechaIconos02.svg" alt="Arrow Right" onClick={() => moveSlide(1)} />
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Academy;
