import PropTypes from 'prop-types';
import "./index.scss";

const HousingCard = ({ location_title }) => {

  return (
      <div className="housing-card bg-primary">
        <p>{location_title}</p>
      </div>
  );
};

export default HousingCard;

HousingCard.propTypes = {
    location_title: PropTypes.string,
}