import React, { useEffect, useState } from "react";
import Character from "./Character";
import useKeyPress from "./hooks/use-key-press";

const CharacterWalk = (characterImg) => {
  const [positionx, setPositionx] = useState(() => {
    const localData = localStorage.getItem("position");
    return localData ? JSON.parse(localData).positionx : 0;
  });
  const [positiony, setPositiony] = useState(() => {
    const localData = localStorage.getItem("position");
    return localData ? JSON.parse(localData).positiony : 0;
  });
  const [bgpositionx, setBgPositionx] = useState(0);
  const [bgpositiony, setBgPositiony] = useState(0);
  const [stepSize, setStepSize] = useState(16);

  useEffect(() => {
    localStorage.setItem("position", JSON.stringify({ positionx, positiony }));
  }, [positionx, positiony]);

  const walkAnimation = () => {
    setBgPositionx(bgpositionx + 32);
    if (bgpositionx > 32) {
      setBgPositionx(0);
    }
  };

  const walkSpeed = () => {
    if (stepSize === 16) setStepSize(32);
    else setStepSize(16);
  };

  useKeyPress((e) => {
    if (e.key === " ") walkSpeed();
    else if (e.key === "ArrowRight") {
      setPositionx(positionx + stepSize);
      walkAnimation();
      setBgPositiony(64);
      // setCharacterImg("url(./assets/characters/f1.png)");
    } else if (e.key === "ArrowLeft") {
      setPositionx(positionx - stepSize);
      walkAnimation();
      setBgPositiony(32);
    } else if (e.key === "ArrowUp") {
      setPositiony(positiony - stepSize);
      walkAnimation();
      setBgPositiony(96);
    } else if (e.key === "ArrowDown") {
      setPositiony(positiony + stepSize);
      walkAnimation();
      setBgPositiony(0);
    }
    e.preventDefault();
  });
  return (
    <>
      <Character
        positionx={positionx}
        positiony={positiony}
        bgpositionx={bgpositionx}
        bgpositiony={bgpositiony}
        characterImg={characterImg.characterImg}
      />
    </>
  );
};

export default CharacterWalk;
