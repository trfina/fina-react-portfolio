import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

function Portfolio(props) {
    const currentCategory = {
        name: "Featured Projects",
        description: "Portfolio examples including code generators, front-end, back-end and full-stack challenges."
    };
    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div>
                <img 
                    src={photo}
                    alt="Gallery of portfolio projects"
                    className="img-thumnail mx-1"
                />
            </div>
        </section>
    );
}

export default Portfolio;