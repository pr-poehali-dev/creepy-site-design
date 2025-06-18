import React from "react";

const HorrorEffects = () => {
  return (
    <>
      {/* Vignette effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black opacity-60" />
      </div>

      {/* Animated border glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-4 border border-red-900 opacity-20 animate-pulse" />
      </div>

      {/* Subtle screen flicker */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="w-full h-full bg-white flicker" />
      </div>

      {/* Moving shadows */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-red-900 rounded-full blur-3xl opacity-10"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animation: `shadow-move ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default HorrorEffects;
