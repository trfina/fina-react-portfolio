import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  const categories = [
    { name: "portfolio", description: "Showcase six projects of interest"},
    { name: "Contact", description: "I would love to hear from you" },
    { name: "resume", description: "My work history..." }
  ];

  const handleClick = () => {
    console.log("click handled")
  }

  return (
    <header data-testid="header" className="flex-row px-1">
    <h2>
    <a data-testid="link" href="/">
      <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a>
    </h2>
    <nav>
      <ul className="flex-row">
        <li className="mx-2">
          <a data-testid="about" href="#about">
            About me
          </a>
        </li>
        {/* mapping categories as defined above before JSX return function */}
        {categories.map((category) => (
          // return only a single JSX element as indicated by the parenthesis
          <li
            className="mx-1"
            // outermost element has the key attribute
            // to help React keep track of items in the virtual DOM
            key={category.name}>
            <span onClick={() => { handleClick(); }}>
              {capitalizeFirstLetter(category.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
    </header>
  );
}

export default Nav;