import React, { useState } from "react";
import Icon from "../pages/img/free-icon-right-arrow-angle-54833.png";

export function Slider() {
  const slides = [
    {
      title: "Навчаюсь на ІІ курсі",
      subtitle: "спеціальність кібербезпека",
      text: "Західноукраїнськомий Національний Університет",
    },
    {
      title: "Закінчив",
      subtitle: "Спеціальність компʼютерні технології",
      text: "Галицький коледж",
    },
    {
      title: "Успішно закінчив курси з розробки",
      subtitle: "Курси з розробки веб додатків",
      text: "GoIT",
    },
    {
      title: "Успішно закінчив курси з розробки",
      subtitle: "Курси з розробки веб додатків",
      text: "ITSTEP",
    },
    {
      title: "Успішно закінчив курси з розробки",
      subtitle: "Курси з розробки на PHP",
      text: "Mate Academy",
    },
    {
      title: "Успішно закінчив курси з розробки",
      subtitle: "Курси з розробки на Js",
      text: "Mate Academy",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 5 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 5 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="flex flex-col justify-center items-center mb-5">
      <div className="w-full max-w-5xl relative overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-500 "
          style={{
            transform: `translateX(-${currentSlide * (100 / 2)}%)`, // зсув слайдів на поточну позицію
            width: `${slides.length * (100 / 3)}%`, // розмір контейнера слайдів
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full max-w-sm rounded shadow-lg p-6 bg-white mx-1"
            >
              <h2 className="text-xl font-bold mb-2 text-gray-950">{slide.title}</h2>
              <h3 className="text-gray-600 mb-4">{slide.subtitle}</h3>
              <p className="text-gray-800">{slide.text}</p>
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-0 py-2 px-1 mx-1 "
          onClick={prevSlide}
        >
          <img src={Icon} alt="" className="w-5 rotate-180" />
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-0 py-2 px-1 mx-1"
          onClick={nextSlide}
        >
          <img src={Icon} alt="" className="w-5" />
        </button>
      </div>
    </div>
  );
}
