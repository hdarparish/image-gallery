import { useEffect, useState } from "react";
import getImage from "../api";
import Image from "./Image";
//styles
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";

const ImageList = ({ city }) => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(1);

  const getData = async (counter = count) => {
    const results = await getImage(city, counter);
    setImages((images) => [...images, ...results]);
    setCount((count) => count + 1);
  };

  useEffect(() => {
    setCount(1);
    setImages([]);
    getData(1);
  }, [city]);
  return (
    <div>
      <InfiniteScroll
        dataLength={images.length} //This is important field to render the next data
        next={getData}
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
