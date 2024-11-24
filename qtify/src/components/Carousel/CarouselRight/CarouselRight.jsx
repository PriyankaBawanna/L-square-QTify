import React from "react";

export default function CarouselRight({ onClick }) {
  return (
    <button className="carousel-btn carousel-btn-right" onClick={onClick}>
      Next
    </button>
  );
}
