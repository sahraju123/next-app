"use client";

import React from "react";
import Slider from "react-slick";
import { UI } from "../../components"

export default function Skills() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="flex flex-col justify-center items-center mb-6 px-4">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-6 mt-6">
        My Technical Skills <span className="md:hidden inline ml-2">&#8594;</span>
      </h2>
      {isMobile ? (
        <Slider {...settings} className="w-full max-w-md">
          <div className="p-4">
          <UI.cards title="Python" secodaryTitle="8 Projects" img_source="./python.png" />
          </div>
          <div className="p-4">
          <UI.cards title="Next JS" secodaryTitle="5 Projects" img_source="./next.svg" />
          </div>
          <div className="p-4">
          <UI.cards title="Php" secodaryTitle="3 Projects" img_source="./php1.png" />
          </div>
          <div className="p-4">
          <UI.cards title="Wordpress" secodaryTitle="5 Projects" img_source="./wordpress1.png" />
          </div>
          <div className="p-4">
          <UI.cards title="Microsoft Office" secodaryTitle="Pro" img_source="./office.png" />          </div>
        </Slider>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-6">
              <UI.cards title="Python" secodaryTitle="8 Projects" img_source="./python.png" />
              <UI.cards title="Next JS" secodaryTitle="5 Projects" img_source="./next.svg" />
              <UI.cards title="Php" secodaryTitle="3 Projects" img_source="./php1.png" />
              <UI.cards title="Wordpress" secodaryTitle="5 Projects" img_source="./wordpress1.png" />
              <UI.cards title="Microsoft Office" secodaryTitle="Pro" img_source="./office.png" />
         
        </div>
      )}
    </div>
  );
}
