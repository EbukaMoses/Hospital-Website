import React from "react";
import PropTypes from "prop-types";
import "./Youtube.css";

const Youtube = ({ embedId }) => (
  <>
    <section className="youtube padding">
      <div className="container video-responsive">
        <iframe
          width="453"
          height="380"
          src={`https://www.youtube.com/embed/${embedId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </section>
  </>
);

Youtube.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default Youtube;
