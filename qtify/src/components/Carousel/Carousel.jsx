import React, { useEffect, useState } from "react";
import "./file.css"; // Assuming custom styles
import style from "./Carousel.module.css"; // Assuming custom styles
import CarouselLeft from "./CarouselLeft/CarouselLeft";
import CarouselRight from "./CarouselRight/CarouselRight";

export default function Carousel({
  data,
  renderComponent,
  selectedFilterIndex,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    // Reset the carousel to the first slide when the selected filter changes
    setCurrentSlide(0);
    setIsBeginning(true);
    setIsEnd(false);
  }, [selectedFilterIndex]);

  const handleNext = () => {
    if (currentSlide < data.length - 1) {
      setCurrentSlide((prevSlide) => prevSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prevSlide) => prevSlide - 1);
    }
  };

  const updatePaginationState = () => {
    setIsBeginning(currentSlide === 0);
    setIsEnd(currentSlide === data.length - 1);
  };

  useEffect(() => {
    updatePaginationState();
  }, [currentSlide]);

  return (
    <div className={style.carouselContainer}>
      {/* Left Navigation Button */}
      {!isBeginning && <CarouselLeft onClick={handlePrev} />}

      <div className={style.carouselWrapper}>
        {data.length > 0 && (
          <div className={style.carouselContent}>
            {renderComponent(data[currentSlide])}{" "}
            {/* Render the current slide */}
          </div>
        )}
      </div>

      {/* Right Navigation Button */}
      {!isEnd && <CarouselRight onClick={handleNext} />}
    </div>
  );
}
