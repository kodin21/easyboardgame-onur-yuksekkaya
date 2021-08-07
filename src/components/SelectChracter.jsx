import React, { useState } from "react";
import CharacterWalk from "./CharacterWalk";

const SelectCharacter = () => {
  const [characterImg, setCharacterImg] = useState(
    "url(./assets/characters/f2.png)"
  );
  return (
    <div className="select-area">
      <select
        className="dropdown"
        name="character"
        id="character"
        onChange={(e) => {
          if (e.target.value === "fm1")
            setCharacterImg("url(./assets/characters/f1.png)");
          else setCharacterImg("url(./assets/characters/f2.png)");
        }}
      >
        <option className="dropdown-options" value="fm1">
          Female Character 1
        </option>
        <option className="dropdown-options" value="fm2">
          Female Character 2
        </option>
      </select>
      <div className="zone-container">
        <CharacterWalk characterImg={characterImg} />
      </div>
    </div>
  );
};

export default SelectCharacter;
