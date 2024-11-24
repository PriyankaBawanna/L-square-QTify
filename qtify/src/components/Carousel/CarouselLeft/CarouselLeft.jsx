import React from "react";

export default function CarouselLeft({ onClick }) {
  return (
    <button className="carousel-btn carousel-btn-left" onClick={onClick}>
      Prev
    </button>
  );
}
