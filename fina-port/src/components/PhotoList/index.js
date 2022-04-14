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
      name: 'NoSQL Challenge: Social Network API',
      category: 'portfolio',
      description:'This project builds an API for a social network web applicaion using Express.js for routing, a MongoDB database, and the Mongoose ODM',
      link:  <a href="https://github.com/trfina/NoSQL-API" target="_blank" rel="noopener noreferrer">Visit GitHub (opens a new tab)</a>
    },
    {
      name: 'Password Generator',
      category: 'portfolio',
      description:'A password generator written in JavaScript',
      technology: 'Built with HTML, CSS, Javascript',
      live: <a href="https://github.com/trfina/password-generator/" target="_blank" rel="noopener noreferrer">Visit GitHub (opens a new tab)</a>
    },
    {
      name: 'Object-Relation-Mapping: e-commerce back-end',
      category: 'portfolio',
      description: 'This app demonstrates an e-commerce back-end build from a working Express.js API. It uses Sequelize to interact with a MySQL database.',
      live: <a href="https://github.com/trfina/ecommerce-backend/" target="_blank" rel="noopener noreferrer">Visit GitHub (opens a new tab)</a>,
    },
    {
      name: 'Professional README Generator',
      category: 'portfolio',
      description:
        'Dynamically generate a document in MarkDown language using the inquirer package.',
      live: <a href="https://github.com/trfina/professional-README-generator" target="_blank" rel="noopener noreferrer">Visit GitHub (opens a new tab)</a>,
    },
    {
      name: 'a Tech Blog for DevOps',
      category: 'portfolio',
      description:
        'This project demonstrates the use of MVC to build a CMS-style technical blog site.',
      live: <a href="https://github.com/trfina/tech-blog" target="_blank" rel="noopener noreferrer">Visit GitHub (opens a new tab)</a>,
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

