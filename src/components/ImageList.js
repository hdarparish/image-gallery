import { useEffect, useState } from "react";
import getImage from "../api";
import Image from "./Image";
//styles
import { AnimatePresence, motion } from "framer-motion";
import { popup } from "../animation";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";

const ImageList = ({ city }) => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(1);

  const getData = async (counter) => {
    const results = await getImage(city, counter);

    setImages((images) => [...images, ...results]);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    setImages([]);
    setCount(1);
    let counter = 1;
    getData(counter);
  }, [city]);
  return (
    <div>
      <InfiniteScroll
        dataLength={images.length} //This is important field to render the next data
        next={() => {
          getData(count);
        }}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry>
            {images.length > 0 &&
              images.map((item) => (
                <Image
                  imageURL={item.urls.regular}
                  description={item.alt_description}
                  key={item.id}
                  photographer={item.user.name}
                />
              ))}
          </Masonry>
        </ResponsiveMasonry>
      </InfiniteScroll>
    </div>
  );
};

export default ImageList;
