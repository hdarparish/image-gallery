import { useEffect, useState } from "react";
import getImage from "../api";
import Image from "./Image";
//styles
import styled from "styled-components";
import { motion } from "framer-motion";

const ImageList = () => {
  const [images, setImages] = useState([]);
  const getData = async () => {
    const results = await getImage();
    setImages(results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Masonry>
      {images.length > 0 &&
        images.map((item) => (
          <Image
            imageURL={item.urls.regular}
            description={item.description}
            key={item.id}
            photographer={item.user.name}
          />
        ))}
    </Masonry>
  );
};

const Masonry = styled(motion.div)`
  column-count: 3;
  overflow-x: hidden;
`;

export default ImageList;
