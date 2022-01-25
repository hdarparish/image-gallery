import React, { useState } from "react";

//styles
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { popup } from "../animation";

import ImageList from "../components/ImageList";

const cities = [
  "Toronto",
  "Ottawa",
  "Montreal",
  "Quebec",
  /*   "Fredericton", */
  /*   "Charlottetown", */
  "Halifax",
  "St. John's",
  "Winnipeg",
  "Regina",
  "Edmonton",
  "Calgary",
  "Vancouver",
  "Victoria",
  "Yellowknife",
  "Whitehorse",
  "Iqaluit",
];

const Home = () => {
  const [city, setCity] = useState("Toronto");
  const [isOpen, setIsOpen] = useState(false);

  const cityHandler = (e) => {
    setIsOpen(!isOpen);
    setCity(e.target.innerText);
  };

  const toggling = () => setIsOpen(!isOpen);
  return (
    <Wrapper>
      <Title variants={popup} initial="hidden" animate="show" exit="exit">
        {!isOpen ? (
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: 100,
              transition: {
                delay: 0.25,
                duration: 0.25,
              },
            }}
            onClick={toggling}
          >
            {city}
          </motion.h2>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              y: 100,
              transition: {
                delay: 0.25,
                duration: 0.25,
              },
            }}
          >
            <ul>
              {cities.map((city, index) => (
                <li onClick={cityHandler} key={index}>
                  {city}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </Title>

      <ImageList city={city} />
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  max-width: 1500px;
  margin: auto;
  overflow-y: hidden;
  text-align: -webkit-center;
  text-align: -moz-center;
`;

const Title = styled(motion.div)`
  padding: 2rem 0rem;
  width: min-content;
  height: 23vh;
  display: flex;
  align-items: center;
  h2 {
    letter-spacing: 0.2rem;
    cursor: pointer;
    width: min-content;
    user-select: none;
  }

  ul {
    height: 20vh;
    overflow-y: scroll;
    font-size: 2.5em;
    padding: 0rem 1rem;
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darkgrey;
    }
    &::-webkit-scrollbar-track {
      background-color: white;
    }

    li {
      user-select: none;
      cursor: pointer;
    }
  }
  //font-size: 10rem;
  @media screen and (max-width: 650px) {
    h2 {
      font-size: 3.5rem;
    }
    ul {
      font-size: 1.5rem;
    }
  }
  @media screen and (max-width: 470px) {
    h2 {
      font-size: 2.7rem;
    }
  }
`;

export default Home;
