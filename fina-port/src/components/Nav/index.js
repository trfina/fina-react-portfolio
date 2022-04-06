import React from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function categorySelected(name) {
    console.log(`${name} clicked`)
}

function Nav() {
    // .map function goes here
    const categories = [
        {
            name: "portfolios",
            description:
            "Gallery of portfolio screenshots",
        },
        {   name: "portraits", 
            description: "Portraits of people in my life" },
            
        {   name: "gardening",
            description: "Past garden project pictures",
        },
    ];
    const handleClick = () => {
        console.log("click handled")
    }

    return (
        <header  className="flex-row px-1">
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about" onClick={() => handleClick()}>
                            About me
                        </a>
                    </li>
                    <li className="mx-2">
                        <span onClick={() => handleClick()}>
                            Contact
                        </span>
                    </li>
                    {
                        categories.map((category) => (
                            <li className="mx-1" key={category.name} >
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