import React, { useState } from "react";
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";


function Test(props) {
    
  const [x, setX] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);

  const goLeft = () => {
    x === 0 ? setX(-100 * (props.data.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (props.data.length - 1) ? setX(0) : setX(x - 100);
    console.log(x);
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
    console.log(e);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
    if (diff > 5) {
      goRight();
    }
    if (diff < -5) {
      goLeft();
    }
    setTouchPosition(null);
  };

  const handleMouseStart = (e) => {
    const touchDown = e.clientX;
    setTouchPosition(touchDown);
    console.log(e);
  };

  const handleMouseMove = (e) => {
    const touchDown = touchPosition;
    if (touchDown === null) {
      return;
    }
    const currentTouch = e.clientX;
    const diff = touchDown - currentTouch;
    if (diff > 5) {
      goRight();
    }
    if (diff < -5) {
      goLeft();
    }
    setTouchPosition(null);
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onMouseDown={handleMouseStart}
      onMouseUp={handleMouseMove}
      className="flex shadow-md cursor-grab mt-6 mx-10 md:w-2/3 md:mx-auto rounded-xl relative overflow-hidden hover:-translate-y-1 hover:shadow-xl transition ease-in-out delay-150 duration-300"
    >
      {props.data.map((e, i) => {
        return (
          <div
            key={i}
            className="flex flex-col justify-center md:flex-row relative min-w-full duration-200 overflow-hidden"
            style={{ transform: `translateX(${x}%)` }}
          >
            <img src={e.img} className="w-full md:w-[60%] md:max-h-72" />
            <div className="flex flex-col basis-full p-6 space-y-2 justify-center items-center">
              <p className="">{e.title}</p>
              <p className="">{e.description}</p>
            </div>
          </div>
        );
      })}
      <button className="absolute top-1/2 left-1" onClick={goLeft}>
        <FaRegArrowAltCircleLeft size={30} color={"gray"} />
      </button>
      <button className="absolute top-1/2 right-1" onClick={goRight}>
        <FaRegArrowAltCircleRight size={30} color={"gray"} />
      </button>
    </div>
  );
}

export default Test;
