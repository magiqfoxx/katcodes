import React from "react";

const OldSchool = () => {
  return (
    <div className="old-school">
      <div className="old-school--logo">
        <img
          src="../img/old-school/cat-line-art-pitr-Kitty-icon.svg"
          alt="cat"
        />

        <h1>Welcome to Kat's website!</h1>
      </div>
      <div className="old-school--gallery">
        <a href="/gallery">
          <img src="../img/old-school/Easel.svg" alt="gallery" />
        </a>
      </div>
      <div className="old-school--dog">
        <a href="/doggopedia">
          <img src="../img/old-school/1547679731.svg" alt="dog" />
        </a>
      </div>
      <div className="old-school--cat">
        <a href="/findlily">
          <img src="../img/old-school/1539916797.svg" alt="cat" />
        </a>
      </div>
      <div className="old-school--games">
        <a href="/games">
          <img
            src="../img/old-school/Game-Controller-Outline-White.svg"
            alt="cat"
          />
        </a>
      </div>
    </div>
  );
};

export default OldSchool;
