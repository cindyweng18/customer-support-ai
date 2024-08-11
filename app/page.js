// app/page.js

import React from "react";

export default function HomePage() {
  return (
    <div>
      {/* Header Section */}
      <div className="header">
        <div className="logo">Boba Broskis</div>
        <div className="options">
          <p className="menu">Menu</p>
          <button className="chat">Chat with Us</button>
          <div className="socials">
            <button className="facebook">fb</button>
            <button className="instagram">insta</button>
            <button className="twitter">twitter</button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero">
        <div className="slogan">
          <p>Grab a Broski</p>
          <p>Cause You're Gonna</p>
          <p>Wanna Share!</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="tea">
        <h1>Menu</h1>
        <p>
          We offer a wide range of delicious boba tea flavors. Explore our menu
          and find your favorite drink!
        </p>
        <div className="teaSelections">
          <div className="milk-tea">
            <h2>Milk Teas</h2>
          </div>
          <div className="slush-serie">
            <h2>Slush Series</h2>
          </div>
          <div className="tea-latte">
            <h2>Tea Lattes</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
