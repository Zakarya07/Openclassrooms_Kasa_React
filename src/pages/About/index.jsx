import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Banner_img from "../../assets/images/About_banner.jpg";
import Collapse from "../../components/Collapse";
import "./index.scss";

const About = () => {
  return (
    <>
      <Header />

      <main className="wrapper">
        <Banner banner_image={Banner_img} />

        <section className="collapses-container">
          <Collapse title="Fiabilité">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes au logement, et toutes les informations
              sont régulièrement vérifié par nos équipes.
            </p>
          </Collapse>
          <Collapse title="Respect">
            <p>
              La bienveillance fait partie des valeurs fondatrice de Kasa. Tout
              comportement discriminatoire ou de perturbations du voisinage,
              entraînera l'exclusion de notre plate-forme.
            </p>
          </Collapse>
          <Collapse title="Service">
            <p>
              La bienveillance fait partie des valeurs fondatrice de Kasa. Tout
              comportement discriminatoire ou de perturbations du voisinage,
              entraînera l'exclusion de notre plate-forme.
            </p>
          </Collapse>
          <Collapse title="Sécurité">
            <p>
              La sécurité des priorités de casa. Aussi bien pour nous autres que
              pour les voyageurs, chaque logement correspond aux critères de
              sécurité établie par nos services. En laissant une note aussi bien
              à notre colocataire, cela permet à nos équipes de vérifier que les
              standards sont bien respectées. Nous organisons également des
              ateliers sur la sécurité, sécurité domestique pour nos hôtes.
            </p>
          </Collapse>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;
