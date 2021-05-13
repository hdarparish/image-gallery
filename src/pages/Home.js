//styles
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animation";

import ImageList from "../components/ImageList";

const Home = () => {
  return (
    <Wrapper>
      <Title variants={popup} initial="hidden" animate="show">
        <h2>Toronto</h2>
      </Title>
      <ImageList />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  max-width: 1500px;
  margin: 40px auto;
  overflow-y:hidden;
`;

const Title = styled(motion.div)`
  font-size: 10rem;
  h2 {
    margin: 3rem 0;
    letter-spacing: 0.2rem;
    text-align: center;
    cursor: default;
  }
`;

export default Home;
