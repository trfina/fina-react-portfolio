import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();
  const [photos] = useState([
    {
      name: 'Curious Traveler',
      category: 'portfolio',
      description:'A travel destination site featuring out-of-the-ordinary stop for the adventurous traveler.',
      technology: 'MERN full-stack with GraphQL',
      live:'https://blooming-ridge-28074.herokuapp.com/',
    },
    {
      name: 'Password Generator',
      category: 'portfolio',
      description:
        'A password generator written in JavaScript'
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
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
    // {
    //   name: 'Green parrot',
    //   category: 'portraits',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Yellow macaw',
    //   category: 'portraits',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Pug smile',
    //   category: 'portraits',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Pancakes',
    //   category: 'food',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Burrito',
    //   category: 'food',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Scallop pasta',
    //   category: 'food',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Burger',
    //   category: 'food',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Fruit bowl',
    //   category: 'food',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Green river',
    //   category: 'landscape',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Docks',
    //   category: 'landscape',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Panoramic village by sea',
    //   category: 'landscape',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Domestic landscape',
    //   category: 'landscape',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // },
    // {
    //   name: 'Park bench',
    //   category: 'landscape',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    // }
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({...image, index: i})
    setIsModalOpen(true);
  }
  
  return (
    <div>
      {isModalOpen && <Modal currentPhoto={currentPhoto} />}
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

