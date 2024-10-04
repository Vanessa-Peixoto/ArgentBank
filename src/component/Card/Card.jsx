import PropTypes from "prop-types";
import './card.scss';

function Card({ image, children }) {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        <img src={image} alt="icon info" className="feature-icon" />
        {children}
      </div>
    </section>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
