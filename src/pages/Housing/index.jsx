import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HousingInfo from "../../components/HousingInfo";
import "./index.scss";
import { useParams } from "react-router-dom";
import housings from "../../data/logements.json";


const Housing = () => {
  let { id } = useParams();

  return (
    <>
    <Header />
    <main className="wrapper">
      <h1>Logement {id} </h1>

      {/* Carousel */}
      <div style={{
        border: "1px solid black",
        height: "415px",
        marginBottom: "30px",
      }}>Carousel</div>
      
      {
        housings.map((housing, index) => (
          housing.id !== id ? "" :  
          <>
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
          
        ))
      }

    </main>
    <Footer />
    </>
  );
};

export default Housing;
