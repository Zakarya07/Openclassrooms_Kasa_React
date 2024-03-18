import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HousingInfo from "../../components/HousingInfo";
import "./index.scss";
import { useParams } from "react-router-dom";
import housings from "../../data/logements.json";
import Slideshow from "../../components/Slideshow";

const Housing = () => {
  // Id of the housing passed in the url
  let { id } = useParams();



  let housing_match = housings.filter((housing) => housing.id === id);

  if (housing_match.length === 1 && housing_match) {
    return (
      <>
        <Header />
        <main className="wrapper">

          {/* Carousel */}
          <Slideshow pictures={housing_match[0].pictures} />

          {/* Housing info */}
          <HousingInfo
            title={housing_match[0].title}
            city={housing_match[0].location}
            tags={housing_match[0].tags}
            host={housing_match[0].host}
            loc_rating={housing_match[0].rating}
            description={housing_match[0].description}
            equipments={housing_match[0].equipments}
          />

        </main>
        <Footer />
      </>
    );
  } else {
    window.location.href = "/*";
  }
};

export default Housing;
