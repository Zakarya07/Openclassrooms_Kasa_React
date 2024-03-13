import "./index.scss";
import PropTypes from "prop-types";
import { useState } from "react";
import { FaChevronUp } from "react-icons/fa6";

const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleClick() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <>
      <div className="collapse-item">
        <div
          onClick={() => handleClick()}
          className={`collapse-title bg-primary`}
        >
          {title}
           <FaChevronUp className={`${isCollapsed ? "active" : ""}`}/>
        </div>
        <div className={`collapse-content ${isCollapsed ? "active" : ""}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Collapse;

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
};

Collapse.defaultProps = {
  title: "Titre NULL",
};
