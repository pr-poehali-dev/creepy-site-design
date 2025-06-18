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
        className="enter-button px-12 py-4 text-2xl font-bold text-black tracking-widest rounded-lg border-2 border-orange-500 transform transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <span className={`inline-block ${isHovered ? "animate-pulse" : ""}`}>
          ENTER
        </span>
      </button>
    </div>
  );
};

export default EnterButton;
