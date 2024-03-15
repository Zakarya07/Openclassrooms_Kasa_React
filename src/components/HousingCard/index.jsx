import PropTypes from 'prop-types';
import "./index.scss";

const HousingCard = ({ location_title, housing_thumbnail}) => {

  return (
      <div className="housing-card bg-primary" style={{
        backgroundImage : `url(${housing_thumbnail})`
      }}>
        <p>{location_title}</p>
      </div>
  );
};

export default HousingCard;

HousingCard.propTypes = {
    location_title: PropTypes.string,
    housing_thumbnail: PropTypes.string,
}