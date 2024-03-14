import React from "react";
import Slide from "./Slide";

const App = () => {
  const slides = [
    {
      id: "slide1",
      imagem:
        "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    },
    {
      id: "slide2",
      imagem:
        "https://img.freepik.com/free-photo/majestic-mountain-peak-tranquil-winter-landscape-generated-by-ai_188544-15662.jpg",
    },
    {
      id: "slide3",
      imagem:
        "https://img.freepik.com/premium-photo/beautiful-mountain-range-reflects-tranquil-water-generative-ai_188544-9117.jpg?size=626&ext=jpg&ga=GA1.1.523418798.1710374400&semt=ais",
    },
  ];
  return (
    <div>
      <Slide slides={slides} />
    </div>
  );
};

export default App;
