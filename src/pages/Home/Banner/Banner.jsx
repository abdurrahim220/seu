import React, { useEffect, useState } from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import img from "../../../assets/Roboto/1.jpg";
import img2 from "../../../assets/Roboto/2.jpg";
import img3 from "../../../assets/Roboto/3.jpg";
import img4 from "../../../assets/Roboto/4.jpg";

const Banner = () => {
  const [imgs, setImage] = useState([]);
  useEffect(() => {
    fetch("events.json")
      .then((res) => res.json())
      .then((data) => {
        setImage(data);
      });
  }, []);

  return (
    <>
      <AwesomeSlider animation="foldOutAnimation" className="h-[700px] mb-16">
        <div>
          <img animation="foldOutAnimation" src={img} alt="" srcset="" />
        </div>
        <div>
          <img src={img2} alt="" srcset="" />
        </div>
        <div>
          <img src={img3} alt="" srcset="" />
        </div>
        <div>
          <img src={img4} alt="" srcset="" />
        </div>
      </AwesomeSlider>
    </>
  );
};

export default Banner;
