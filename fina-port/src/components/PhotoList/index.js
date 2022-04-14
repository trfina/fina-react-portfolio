import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [photos] = useState([
    {
      name: 'Curious Traveler',
      category: 'portfolio',
      description:'A travel destination site featuring out-of-the-ordinary stops for the adventurous traveler.',
      technology: 'MERN full-stack with GraphQL',
      live: <a href="https://curious-traveler.herokuapp.com/" target="_blank" rel="noopener noreferrer">Visit Site (opens a new tab)</a>
    },
    {
      name: 'Password Generator',
      category: 'portfolio',
      description:'A password generator written in JavaScript'
    },
    {
      name: 'Portfolio Builder',
      category: 'portfolio',
      description:
        'Portfolio builder with Create React App'
    },
    {
      name: 'Curious Traveler - beta',
      category: 'portfolio',
      description:
        'Dynamically generate a document in MarkDown language using the inquirer package.',
      technology: 'MySQL and Restful.API using handlebars',
    },
    {
      name: 'Professional README Generator',
      category: 'portfolio',
      description:
        'Dynamically generate a document in MarkDown language using the inquirer package.'
    },
    {
      name: 'Object-Relation-Mapping: e-commerce back-end',
      category: 'portfolio',
      description:
        'Demonstrate an e-commerce back-end build from a working Express.js API and Sequelize to interact with a MySQL database.'
    },
    {
      name: 'My Current Resume',
      category: 'resume',
      description:
        'Employment history with skills list'
    }

  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i});
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div>
      {isModalOpen && (
      <Modal currentPhoto={currentPhoto} onClose={toggleModal} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`)}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;

