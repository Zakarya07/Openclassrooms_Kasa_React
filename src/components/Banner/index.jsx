import "./index.scss";
import PropTypes from 'prop-types';


const Banner = ({banner_heading, banner_image}) => {
    return (  

        <div className="banner">
            <img src={banner_image}/>
            <h1>{banner_heading}</h1>
        </div>

    );
}
 
export default Banner;

Banner.propTypes = {
    banner_heading: PropTypes.string,
    banner_image: PropTypes.string,
}