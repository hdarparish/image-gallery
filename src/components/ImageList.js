import { useEffect, useState } from "react";
import getImage from "../api";
import Image from "./Image";
//styles
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(1);

  const getData = async () => {
    const results = await getImage(count);
    setImages((images) => [...images, ...results]);
    console.log(...images);
    setCount(count + 1);
  };
  useEffect(() => {
    //setCount(1);
    getData();
  }, []);
  return (
    <div>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
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
      </ResponsiveMasonry>
      <button onClick={getData}>Load More</button>
    </div>
  );
};

export default ImageList;
