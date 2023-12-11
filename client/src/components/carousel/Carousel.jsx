import React from "react";
import { Button, Carousel } from "react-bootstrap";
import "./carousel.css";
import { Icon } from "@iconify/react";

const MyCarousel = ({ images, main }) => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className={`d-block w-100 carousel-img ${
                  main ? "carousel-img-main" : ""
                }`}
                src={image}
                alt={`Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      {main && (
        <Button className="float-btn" variant="danger">
          Free Dream Counselling <Icon icon="ph:arrow-up-right-light" />
        </Button>
      )}
    </>
  );
};

export default MyCarousel;
