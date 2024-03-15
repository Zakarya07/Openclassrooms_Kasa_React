import Header from "../../components/Header";
import Banner from "../../components/Banner";
import banner_image from "../../assets/images/Home_banner.jpg";
import Footer from "../../components/Footer";
import HousingCard from "../../components/HousingCard";
import "./index.scss";
import housings_data from "../../data/logements.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Header />
      <main className="wrapper">
        <Banner
          banner_heading="Chez vous, partout et ailleurs"
          banner_image={banner_image}
        />
        <section className="housings-cards-container wrapper">
          {housings_data.map((housing) => (
            <Link key={housing.id} to={`/housing/${housing.id}`}>
              <HousingCard housing_thumbnail={housing.cover} location_title={housing.title}/>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
