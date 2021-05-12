import { useEffect } from "react";
import getImage from "../api";
import Image from "./Image";

const ImageList = () => {
  useEffect(() => {
    const getData = async () => {
      const results = await getImage();
      console.log(results);
    };
    getData();
  }, []);
  return (
    <div className="container">
      <Image />
    </div>
  );
};

export default ImageList;
