//styles
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animation";

const Image = ({ imageURL, description, photographer }) => {
  return (
    <Container variants={popup} initial="hidden" animate="show">
      <img src={imageURL} alt={description} />
      <div className="overlay">
        <div className="details">
          <p>{description}</p>
          <p>Posted by: {photographer}</p>
        </div>
      </div>
    </Container>
  );
};

const Container = styled(motion.div)`
  position: relative;
  text-align: left;
  img {
    margin-bottom: 1em;
    background-color: #eee;
    display: block;
    width: 100%;
    height: 100%;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 0;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.7) 0%,
      rgba(255, 255, 255, 0.7) 50%,
      rgb(255, 255, 255, 0.7) calc(50%)
    );
    .details {
      position: absolute;
      top: 8px;
      left: 16px;
      color: black;
      font-weight: bold;
    }
    p {
      margin-bottom: 1rem;
    }
  }

  &:hover .overlay {
    opacity: 1;
    height: 100%;
  }
`;

export default Image;
