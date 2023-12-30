import React, { useState } from 'react';
import { Carousel, Modal, Button } from 'react-bootstrap';

const MyCarousel = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [showCarousel, setShowCarousel] = useState(false);
  
    const handleImageClick = (item) => {
      setSelectedItem(item);
      setShowCarousel(true);
    };
  
    const handleClose = () => {
      setSelectedItem(null);
      setShowCarousel(false);
    };
  
    const projectsWithImages = [
      {
        id: 1,
        title: 'Budget Bytes',
        description: 'Web application featuring an intuitive recipe chatbot. Enables users to access customized recipes based on ingredient availability, ' + 
            'cuisine preferences, or general inquiries. Enhanced functionality is available with account creation, including but not limited to allowing users ' + 
            'to save favorites, plan meals, generate personalized grocery lists.',
        link: 'https://github.com/cchelsd/budgetBytes.git',
        images: [
            {
                image: 'landingPage-1.png', 
                caption: 'Landing Page'
            },
            {
                image: 'landingPage-2.png',
                caption: 'About Section of Landing Page'
            },
            {
                image: 'chatbotPage.png',
                caption: 'Recipe Chatbot'
            },
            {
                image: 'savedRecipes-1.png',
                caption: 'Saved Recipes Page'
            },
            {
                image: 'savedRecipes-2.png',
                caption: 'Saved Recipe Details Modal'
            }
        ]
      },
      {
        id: 2,
        title: 'Personal Portfolio',
        description: 'An online portfolio offering an introduction, resume, and an in-depth \'About Me\' section. ' + 
            'Explore my showcased projects to delve into my expertise and accomplishments.',
        images: [
            {
                image: 'portfolio.png', 
                caption: 'Home Page (Intro)'
            },
            {
                image: 'portfolio-about.png',
                caption: 'About Me'
            }
        ]
      },
      {
        id: 3,
        title: 'TWSI',
        description: 'A service wrapper for Azure Computer Vision API. TWSI transforms Azure\'s Computer Vision API into ' +
            'a RESTful web service accessible through a user-friendly web app. User\'s can easily utilize Computer Vision features including image analysis ' + 
            'and OCR (Optical Character Recognition).',
        images: [
            {
                image: 'twsi.png', 
                caption: 'Landing Page'
            },
            {
                image: 'twsi-results.png',
                caption: 'Image Analysis Results'
            }
        ]
      }

    ];

    return (
        <>
            <Carousel>
                {projectsWithImages.map((item) => (
                    <Carousel.Item key={item.id}>
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    className="d-block w-100"
                                    src={require(`./resources/${(item.images[0]).image}`)}
                                    alt={`${item.title} - Image 1`}
                                    onClick={() => handleImageClick(item)}
                                    style={{ cursor: 'pointer', marginBottom: '10px' }}
                                />
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="link-button">GitHub</a>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            <Modal show={showCarousel} onHide={handleClose} size="xl" centered>
                <Modal.Header closeButton>
                <Modal.Title>{selectedItem ? selectedItem.title : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {selectedItem && (
                    <Carousel>
                    {selectedItem.images.map((item, index) => (
                        <Carousel.Item key={index}>
                            <img className="d-block w-100" src={require(`./resources/${item.image}`)} alt={`${selectedItem.title} - Image ${index + 1}`} />
                            <Carousel.Caption>
                                <h4>{item.caption}</h4>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                    </Carousel>
                )}
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
};
  
export default MyCarousel;