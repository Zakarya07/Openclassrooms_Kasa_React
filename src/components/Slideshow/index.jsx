import { useState } from "react";
import "./index.scss";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

const Slideshow = ({ pictures }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  function handlePrev() {
    if (slideIndex <= 0) {
      setSlideIndex(slideIndex + pictures.length - 1);
    } else {
      setSlideIndex(slideIndex - 1);
    }
  }

  function handleNext() {
    if (slideIndex >= pictures.length - 1) {
      setSlideIndex(0);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  }

  return (
    <>
      <div className="caroussel-container">
        {/* Image container */}
        <div className="image-container">
          <img src={pictures[slideIndex]} alt={`Slide number ${slideIndex}`} />
        </div>

        {pictures.length > 1 ? (
          <>
            {/* Indicator and navigation container */}
            <div className="indicator-container">
              {/* Navigation buttons container */}
              <div className="navigation-button-container">
                <button type="button" onClick={() => handlePrev()}>
                  <MdChevronLeft />
                </button>
                <button type="button" onClick={() => handleNext()}>
                  <MdChevronRight />
                </button>
              </div>

              {/* Picture number indicator */}
              <div className="picture-number-container">
                <p className="picture-number">
                  {slideIndex + 1}/{pictures.length}
                </p>
              </div>
            </div>
          </>
        ) 
        : 
        ""
        
        }
      </div>
    </>
  );
};

export default Slideshow;
