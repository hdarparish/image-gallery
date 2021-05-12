//styles
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animation";

import ImageList from "../components/ImageList";

const Home = () => {
  return (
    <div>
      <Title variants={popup} initial="hidden" animate="show">
        <h2>Toronto</h2>
      </Title>
      <ImageList />
    </div>
  );
};

const Title = styled(motion.div)`
  font-size: 10rem;
  h2 {
    margin: 3rem 5rem;
    letter-spacing: 0.2rem;
  }
`;

export default Home;
