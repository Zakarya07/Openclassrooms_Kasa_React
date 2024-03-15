import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HousingInfo from "../../components/HousingInfo";
import "./index.scss";
import { useParams } from "react-router-dom";
import housings from "../../data/logements.json";
import Slideshow from "../../components/Slideshow";

const Housing = () => {
  let { id } = useParams();

  return (
    <>
      <Header />
      <main className="wrapper">
        {housings.map((housing, index) =>
          housing.id !== id ? (
            ""
          ) : (
            <>
              {/* Carousel */}
              <Slideshow pictures={housing.pictures} />

              {/* Housing info */}
              <HousingInfo
                key={index}
                title={housing.title}
                city={housing.location}
                tags={housing.tags}
                host={housing.host}
                loc_rating={housing.rating}
                description={housing.description}
                equipments={housing.equipments}
              />
            </>
          )
        )}
      </main>
      <Footer />
    </>
  );
};

export default Housing;
