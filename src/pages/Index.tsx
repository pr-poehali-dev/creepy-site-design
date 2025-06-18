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

      <div className="relative z-10 flex flex-col items-center justify-center h-screen">
        <div className="flex-1 flex flex-col justify-center">
          <HorrorTitle />
        </div>

        <div className="pb-24">
          <EnterButton />
        </div>
      </div>
    </div>
  );
};

export default Index;
