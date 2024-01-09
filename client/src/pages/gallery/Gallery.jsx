import React, { useState } from "react";
import "./gallery.css";
import Navbar from "../../components/navbar/Navbar";
import NewletterSub from "../../components/newsletterSub/NewletterSub";
import Footer from "../../components/footer/Footer";
import aboutHome1 from "../../images/about-home-1.jpeg";
import aboutHome2 from "../../images/about-home-2.jpeg";
import serviceBg01 from "../../images/ServiceBg01.png";
import serviceBg02 from "../../images/ServiceBg02.png";
import serviceBg03 from "../../images/ServiceBg03.png";
import HeroVideo from "../../images/heroBgVideo.mp4";
import { Modal } from "react-bootstrap";

const Gallery = () => {
  const galleryImages = [
    aboutHome1,
    aboutHome2,
    serviceBg01,
    serviceBg02,
    serviceBg03,
  ];

  const galleryVideos = [HeroVideo, HeroVideo, HeroVideo, HeroVideo];

  const [galleryActive, setGalleryActive] = useState("image");
  const handleGalleryClick = (galleryType) => {
    setGalleryActive(galleryType);
  };

  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  return (
    <>
      <Navbar />
      <div className="container gallery-container my-5">
        <h1>A Photo Gallery of our Work.</h1>
        <p>
          The Nature is Beautiful find your favorite picture around the world.
        </p>
        <div className="row my-5">
          <div className="gallery-seperator my-3">
            <div
              className={
                galleryActive === "image" ? "gallery-seperator-active" : ""
              }
              onClick={() => handleGalleryClick("image")}
            >
              Images
            </div>
            <div
              className={
                galleryActive === "video" ? "gallery-seperator-active" : ""
              }
              onClick={() => handleGalleryClick("video")}
            >
              Videos
            </div>
          </div>
          {galleryActive === "image" &&
            galleryImages.map((image, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="thumbnail">
                  <div className="img-container">
                    <img src={image} alt="" className="gallery-img" />
                    <div className="overlay">
                      <p className="caption">Caption Here</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {galleryActive === "video" &&
            galleryVideos.map((video, index) => (
              <div
                className="col-lg-6 col-sm-6"
                key={index}
                onClick={() => handleVideoClick(video)}
              >
                <div className="thumbnail">
                  <div className="img-container">
                    <video autoPlay loop muted src={video}></video>
                    <div className="overlay">
                      <p className="caption">Caption Here</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Modal
          show={selectedVideo !== null}
          onHide={handleCloseModal}
          dialogClassName="gallery-modal"
        >
          <Modal.Body>
            <video autoPlay loop src={selectedVideo}></video>
          </Modal.Body>
        </Modal>
      </div>
      <NewletterSub />
      <Footer />
    </>
  );
};

export default Gallery;
