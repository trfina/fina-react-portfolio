import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header data-testid="header" className="flex-row px-1">
    <h2>
    <a data-testid="link" href="/">
      <span role="img" aria-label="camera"> 💼 Tammy Fina</span>
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
          <li className={`mx-1 ${
            currentCategory.name === category.name && 'navActive'
            }`} key={category.name}>
          <span
            onClick={() => {
              setCurrentCategory(category)
            }}
          >
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