import React from "react";
import HorrorBackground from "@/components/HorrorBackground";
import HorrorTitle from "@/components/HorrorTitle";
import EnterButton from "@/components/EnterButton";
import HorrorEffects from "@/components/HorrorEffects";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <HorrorBackground />
      <HorrorEffects />

      <div className="relative z-10 flex flex-col h-screen">
        <div
          className="flex-1 flex flex-col justify-center items-center"
          style={{ height: "45%" }}
        >
          <HorrorTitle />
        </div>

        <div className="flex-1 flex justify-center items-start pt-16">
          <EnterButton />
        </div>
      </div>
    </div>
  );
};

export default Index;
