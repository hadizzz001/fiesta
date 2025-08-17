// Component: TwoByTwoGrid.jsx
import React from "react";

const TwoByTwoGrid = () => {
  return (
    <div className="grid-container">
      {/* 1st Box */}
      <div className="grid-item">
        <img
          src="https://res.cloudinary.com/dx6kwjzog/image/upload/v1755367265/001_lgzoxg.webp"
          alt="Image 1"
          className="grid-image"
        />
        <div className="grid-box" style={{ backgroundColor: "#ff2929", color: "#fff" }}>
          <h2 className="grid-title">Cola Flavor</h2>
          <p className="grid-text">Experience the classic cola
            flavor you love, now with a
            unique twist that only Fiesta
            can provide.
          </p>
        </div>
      </div>

      {/* 2nd Box */}
      <div className="grid-item">
        <img
          src="https://res.cloudinary.com/dx6kwjzog/image/upload/v1755367265/002_g8maze.webp"
          alt="Image 2"
          className="grid-image"
        />
        <div className="grid-box" style={{ backgroundColor: "#fecce9", color: "#604a7b" }}>
          <h2 className="grid-title">Fruit Flavor</h2>
          <p className="grid-text">Indulge in the luscious and
            vibrant Berry flavors of Fiesta
            Fruit.
          </p>
        </div>
      </div>

      {/* 3rd Box */}
      <div className="grid-item">
        <img
          src="https://res.cloudinary.com/dx6kwjzog/image/upload/v1755367265/003_p6it55.webp"
          alt="Image 3"
          className="grid-image"
        />
        <div className="grid-box" style={{ backgroundColor: "#fef6ad", color: "#ff660a" }}>
          <h2 className="grid-title">Orange-Blast</h2>
          <p className="grid-text">Fiesta Orange delivers the
            mouthwatering taste of fresh
            oranges with a health-conscious
            Twist.
          </p>
        </div>
      </div>

      {/* 4th Box */}
      <div className="grid-item">
        <img
          src="https://res.cloudinary.com/dx6kwjzog/image/upload/v1755367265/004_epm2r2.webp"
          alt="Image 4"
          className="grid-image"
        />
        <div className="grid-box" style={{ backgroundColor: "#c0ff72", color: "#604a7b" }}>
          <h2 className="grid-title">Lemonade</h2>
          <p className="grid-text">Dive into the crisp and
            refreshing taste of Fiesta
            Lemonade.</p>
        </div>
      </div>

      <div className="grid-item">
        <img
          src="https://res.cloudinary.com/dx6kwjzog/image/upload/v1755367264/005_pgvsii.webp"
          alt="Image 4"
          className="grid-image"
        />
        <div className="grid-box" style={{ backgroundColor: "#fee1f3", color: "#d13d9b" }}>
          <h2 className="grid-title">Candy Crush</h2>
          <p className="grid-text">Step into a world of
            sweet delight with Fiesta
            Candy Crush. This playful
            beverage captures the
            nostalgic taste of your
            favorite candies in a
            refreshing drink form.</p>
        </div>
      </div>
    </div>
  );
};

export default TwoByTwoGrid;
