import "./index.scss";
import Collapse from "../Collapse";
import { GoStarFill } from "react-icons/go";

const HousingInfo = ({
  title,
  city,
  tags,
  host,
  loc_rating,
  description,
  equipments,
}) => {
  const stars = [1, 2, 3, 4, 5];
  const rating = parseInt(loc_rating);

  return (
    <>
      <section className="global-informations-container">
        <div className="top-part-location">
          {/* Location information LEFT */}
          <div className="left-location-info">
            {/* Title name */}
            <h1 className="location-title text-primary">{title}</h1>
            {/* City */}
            <p className="location-city">{city}</p>
            {/* Tags */}
            <div className="location-tags">
              {tags.map((tag, index) => (
                <span key={index} className="bg-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Host and rating RIGHT */}
          <div className="right-host-rating">
            <div className="host">
              {/* Name */}
              <div className="name-container">
                <p className="text-primary">{host.name}</p>
              </div>
              {/* Profile picture */}
              <div className="picture-container">
                <img alt="Host profile" src={host.picture} />
              </div>
            </div>
            <div className="rating">
              {stars.map((star, index) => (
                <GoStarFill
                  key={index}
                  className={`unfilled-star ${
                    rating >= star ? "text-primary" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="location-collapses-container">
          {/* Description */}
          <Collapse title="Description">
                  <p>
                    {description}
                  </p>
          </Collapse>

          {/* Equipments */}
          <Collapse title="Équipements">
                  <ul>
                    {equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                    ))}
                  </ul>
          </Collapse>
        </div>
      </section>
    </>
  );
};

export default HousingInfo;
