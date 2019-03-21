import React from "react";

const OldSchool = () => {
  return (
    <div className="old-school">
      <header>
        Kat codes!
        <button old-school--button>Choose a diferent theme</button>
      </header>

      <nav>
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
        <div className="old-school--dog" />
        <div className="old-school--cat">
          <a href="/findlily">
            <img src="../img/old-school/1539916797.svg" alt="cat" />
          </a>
        </div>
        <div className="old-school--games" />
      </nav>
      <footer>
        All images from openclipart.org with Creative Commons Zero 1.0 License
      </footer>
    </div>
  );
};

export default OldSchool;
