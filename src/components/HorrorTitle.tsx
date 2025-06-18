import React from "react";

const HorrorTitle = () => {
  return (
    <div className="text-center mb-8 pulse-horror">
      <h1 className="horror-title text-6xl md:text-8xl font-bold text-red-600 mb-4 flicker">
        NIGHTMARE
      </h1>
      <h2 className="horror-subtitle text-2xl md:text-3xl text-orange-400 opacity-90">
        BEGINS
      </h2>
      <div className="mt-6 text-gray-400 text-lg tracking-widest">
        <span className="flicker">В</span>
        <span className="flicker" style={{ animationDelay: "0.1s" }}>
          а
        </span>
        <span className="flicker" style={{ animationDelay: "0.2s" }}>
          ш
        </span>
        <span className="flicker" style={{ animationDelay: "0.3s" }}>
          &nbsp;
        </span>
        <span className="flicker" style={{ animationDelay: "0.4s" }}>
          к
        </span>
        <span className="flicker" style={{ animationDelay: "0.5s" }}>
          о
        </span>
        <span className="flicker" style={{ animationDelay: "0.6s" }}>
          ш
        </span>
        <span className="flicker" style={{ animationDelay: "0.7s" }}>
          м
        </span>
        <span className="flicker" style={{ animationDelay: "0.8s" }}>
          а
        </span>
        <span className="flicker" style={{ animationDelay: "0.9s" }}>
          р
        </span>
        <span className="flicker" style={{ animationDelay: "1.0s" }}>
          &nbsp;
        </span>
        <span className="flicker" style={{ animationDelay: "1.1s" }}>
          ж
        </span>
        <span className="flicker" style={{ animationDelay: "1.2s" }}>
          д
        </span>
        <span className="flicker" style={{ animationDelay: "1.3s" }}>
          ё
        </span>
        <span className="flicker" style={{ animationDelay: "1.4s" }}>
          т
        </span>
      </div>
    </div>
  );
};

export default HorrorTitle;
