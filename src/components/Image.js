//styles
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { popup } from "../animation";

const Image = ({ imageURL, description, photographer }) => {
  return (
    <AnimatePresence>
      <Container variants={popup} initial="hidden" animate="show" exit="exit">
        <img src={imageURL} alt={description || "toronto"} />
        <div className="overlay">
          <div className="details">
            <p>{description}</p>
            <p>Posted by: {photographer}</p>
          </div>
        </div>
      </Container>
    </AnimatePresence>
  );
};

const Container = styled(motion.div)`
  position: relative;
  text-align: left;
  margin: 1em;
  img {
    background-color: #eee;
    display: block;
    width: 100%;
    height: 100%;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 10;
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
      left: 20px;
      color: black;
      font-weight: bold;
      overflow-y: hidden;
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
