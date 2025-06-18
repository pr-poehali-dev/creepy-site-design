import React, { useState } from "react";

const EnterButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    // Здесь можно добавить логику перехода в игру
    console.log("Entering the nightmare...");
  };

  return (
    <div className="flex justify-center">
      <button
        className="enter-button px-16 py-6 text-3xl font-bold text-black tracking-[0.3em] rounded-none border-4 border-orange-600 transform transition-all duration-300 relative overflow-hidden shadow-horror-orange"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 opacity-20"></div>
        <span
          className={`relative z-10 inline-block font-mono ${isHovered ? "animate-pulse text-orange-900" : "text-black"}`}
        >
          ENTER
        </span>
        {isHovered && (
          <div className="absolute inset-0 animate-ping bg-orange-400 opacity-30 rounded-none"></div>
        )}
      </button>
    </div>
  );
};

export default EnterButton;
