//LIBRERIAS

//RECURSOS
import fondoPrincipal from "./imagenes/mount-mont-blanc-covered-snow-reflecting-water-evening-chamonix-france (1).jpg"
import iconoHome from "./imagenes/home-button_9073243.png"
import imagenPerfil from "./imagenes/361918089_2144145259122188_8352707023203927720_n.jpg"
import pasatiempos from "./imagenes/Img.jpg"
import educacion from "./imagenes/unnamed (1).png"
import conocimientos from "./imagenes/Recurso1.png"
import afeeci from "./imagenes/afeeci.jpg"
import imfurImg from "./imagenes/imfur.png"




function App() {


  const imfur = () => { window.open("https://www.imfur.org") };


  return (
    <>

      <div className='contenedor-Principal'>

        <div className="portada-Principal" id="Home">

          <img src={fondoPrincipal} alt="FondoPrincipal" />

          <div>
            <h1 className="h1-light brillo-letras">Edgar Delgadillo Cortez</h1>
            <h2 id="ingeEnCompu" className="h2-lighter brillo-letras">Ingeniero en computación</h2>
          </div>

        </div>

        <div className="navBar">

          <div className="icon">
            <a href="#Home"><img src={iconoHome} alt="Icono Home" id="iconoNavBar" /></a>
          </div>

          <div className="menu">
            <span><a href="#Sobremi">Sobre mi</a></span>
            <span><a href="#Educacion">Educación</a></span>
            <span><a href="#PF">Perfil Profesional</a></span>
          </div>


        </div>

        <div className="contenido">

          <div>

            <h1 className="h1-light brillo-letras" id="Sobremi">Sobre mi</h1>

          </div>

          <div className="contenido2">

            <div>

              <h1 className="h1-light">¿Quien soy?</h1>
              <h2 className="h2-lighter">Estudiante de ingenieria en computación</h2>
              <p className="p-light">Tengo 21 años, destaco por mi gran capacidad de liderazgo, toma de desicciones acertadas y una buena eficiencia para trabajar bajo presión.</p>
              <p className="p-light">Teniendo una gran capacidad de adecuarme a cualquier rama de mi especialidad, ya sea <strong>Frontend</strong> (Donde poseo mayor experiencia), <strong>Backend o Fullstack</strong>; sin embargo jamás me cerraría a aprender algo que me haga mejor programador o ingeniero.</p>

            </div>

            <div>

              <img src={imagenPerfil} alt="EdgarDelgadilloCortez" />

            </div>

          </div>

        </div>

        <div className="contenido">

          <div className="contenido2">


            <div>

              <img src={pasatiempos} alt="Pasatiempos" />

            </div>

            <div>

              <h1 className="h1-light">Pasatiempos</h1>
              <h2 className="h2-lighter">Pasión por el arte y la cultura</h2>
              <p className="p-light">Gracias a una gran pasión a lo videojuego, fui impulsado a estudiar la carrera de <strong>Ingenieria en Computación</strong> dandome cuenta que lo que más me apasionaba era el desarrollo y adecuación de páginas web para el usuario final.</p>
              <p className="p-light">Esto me ha llevado a desarrollar habilidades técnicas y profesionales, como la creación de la página web <a onClick={imfur} title="Viajar al sitio.">imfur.org</a>, la cual desarrollé en su mayor parte. Este proyecto ha permitido fortalecer mis capacidades en el desarrollo web, diseño UX/UI y gestión de proyectos.</p>

            </div>

          </div>

        </div>

        <div className="contenido">

          <div>

            <h1 className="h1-light brillo-letras" id="Educacion">Educación</h1>

          </div>

          <div className="contenido2">

            <div>

              <h1 className="h1-light">Trayectoria academica</h1>
              <ul>
                <li>Colegio de Ciencias y Humanidades Plantel Vallejo - 2019 - 2021.</li>
                <li>Tecnico especializado en sistemas de Software. - 2021.</li>
                <li>Ingenieria en computación en la Facultad de Estudios Superiores Plantel Aragón. - 2021 - actualidad.</li>
                <li>Bootcamp de Frontend y Backend - 2022.</li>
              </ul>
            </div>

            <div>

              <img src={educacion} alt="FesAragon" />

            </div>

          </div>

        </div>

        <div className="contenido">

          <div className="contenido2">

            <div>

              <h1 className="h1-light">Conocimientos</h1>
              <h2 className="h2-lighter">Conocimientos y experiencia en tecnologías</h2>
              <ul className="listaLarga">
                <li>HMLT5 - 3 años.</li>
                <li>CSS3 - 3 años.</li>
                <li>Javascript - 3 años.</li>
                <li>REACT/VUE - 2 años.</li>
                <li>FIGMA - 2 años.</li>
                <li>Firebase (Hosting, Database, Authentication, Storage) - 2 años.</li>
                <li>C++ - 2 años.</li>
                <li>Bases de datos no relacionale sy relacionales - 2 años.</li>
                <li>UI/UX - 2 años.</li>
                <li>Repositorios en Github - 1 año.</li>
                <li>Trabajo colaborativo - 1 año.</li>
                <li>JAVA - 1 año.</li>
                <li>Visual Basic - 1 año.</li>
                <li>Python - 1 año.</li>
                <li>Consumir API'S - 6 meses.</li>
                <li>mySQL - 6 meses.</li>
                <li>Docker - 6 meses.</li>
                <li>HostGator - 6 meses.</li>
                <li>Stripe - 3 meses.</li>
              </ul>
            </div>

            <div>

              <img src={conocimientos} alt="FesAragon" />

            </div>

          </div>

          <div className="contenidoXP">

            <div>

              <h1 className="h1-light brillo-letras" id="PF">Experiencia Profesional</h1>

            </div>

            <div className="contenido2XP">

              <div>

                <h2 className="h2-bold brillo-letras">Desarrollador Web - AFEECI A.C.</h2>
                <br />
                <h2 className="h2-lighter">Julio 2022 - Octubre 2022 (Único proyecto).</h2>
                <h3 className="brillo-letras h3-lighter">Desarrollo de un sistema de seguimiento de pacientes y jovenes en situacion vulnerable.</h3>
                <ul>
                  <li>Maquetación de formularios (Figma)</li>
                  <li>Recopilación, gestión y manejo de datos (SheetJs)</li>
                  <li>Manejo responsivo del sistema (Media Query, CSS3)</li>
                  <li>Guardar y actualizar datos (Firestore Database, mySQL)</li>
                  <li>Administración de hosting gratuito del sitio (Firebase Hosting)</li>
                  <li>Gestión de algoritmos (Javascript)</li>
                </ul>
              </div>

              <div>

                <img src={afeeci} alt="afeeci" />

              </div>

            </div>

            <div className="contenido2XP">

              <div>

                <h2 className="h2-bold brillo-letras">Desarrollador Web - IMFUR</h2>
                <br />
                <h2 className="h2-lighter">Enero 2023 - Diciembre 2024.</h2>
                <h3 className="brillo-letras h3-lighter">Diseño, desarrollo e implementación de un sistema de reservación de eventos (convenciones) para agencia de marketing.</h3>
                <ul className="listaMuyLarga">
                  <li>Desarrollo de API's REST implementadas con Python (Fast Api), JS (express) </li>
                  <li>Contenerizacion de Apis con Docker</li>
                  <li>Gestión e implementación de servidor web (apache)</li>
                  <li>Despliegue de backend en Google Cloud (cloudRun)</li>
                  <li>Implementación de sistema de pagos y generación de boletos (Stripe, QRReact, React-PDF)</li>
                  <li>Desarrollo de Front-End con React Native </li>
                  <li>Uso de base de datos no realacionales (Firestore)</li>
                  <li>Gestión de usuarios con Firebase.</li>
                  <li>Desarrollo de métricas de usuario con Google Analytics</li>
                  <li>Trabajo colaborativo con Git</li>
                  <li>Conocimientos de windows y linux</li>
                </ul>
              </div>

              <div>

                <img src={imfurImg} alt="imfur" />

              </div>

            </div>

          </div>

        </div>



      </div>

    </>
  )
}

export default App
