import React from "react";
import "./serviceBuilder.css";
import NewletterSub from "../../components/newsletterSub/NewletterSub";
import Footer from "../../components/footer/Footer";
import Sconnect from "../../components/sconnect/Sconnect";
import Navbar from "../../components/navbar/Navbar";
import SSCard from "../../components/sSCard/SSCard";
import SHowWeWork from "../../components/sHowWeWork/SHowWeWork";
import SHeroSection from "../../components/sHeroSection/SHeroSection";

const ServiceBuilder = () => {
  const howWeWorkInfo = {
    bgImg:
      "https://s3-alpha-sig.figma.com/img/2324/f670/8bf0761274d34c3ca78360632c0f4b5a?Expires=1704672000&Signature=Z9XDj~PHpUKsvxjXK8tCcr3wbI7Py8es3xpJMha3-lsMZXlxuPVTfY5cgpfLy-nTZ2v4PkgU8jJNu0sTyQTYGGcpZ0v2O3fh7FW2isR-xXQioMjAwzTb7ppeKN9XD2D5F1MvbDzOhbhILasCOipxaaKukS04aZvWh1pM-UJZBJ0xzigtERENvqjq4MKlV6tZBtQ-RvE81G53VROpHekAwHs-CvLKviYCyWrqifoMM4EYAAso7zLEbapzEHIviF1zazGnwsvKX8eQxZDriMxzLVJnG7eRbZcXqzBQWhiHBTlQcoTYU01XuC7dmfR~vCLHUOgzZKZ~IyUwJkbi2Vz3ZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    heading: "How we Work",
    desc: "Lorem Ipsum is simply dummy textof the printing and typesetting industry.Lorem Ipsum has been.",
    img: "https://s3-alpha-sig.figma.com/img/2324/f670/8bf0761274d34c3ca78360632c0f4b5a?Expires=1704672000&Signature=Z9XDj~PHpUKsvxjXK8tCcr3wbI7Py8es3xpJMha3-lsMZXlxuPVTfY5cgpfLy-nTZ2v4PkgU8jJNu0sTyQTYGGcpZ0v2O3fh7FW2isR-xXQioMjAwzTb7ppeKN9XD2D5F1MvbDzOhbhILasCOipxaaKukS04aZvWh1pM-UJZBJ0xzigtERENvqjq4MKlV6tZBtQ-RvE81G53VROpHekAwHs-CvLKviYCyWrqifoMM4EYAAso7zLEbapzEHIviF1zazGnwsvKX8eQxZDriMxzLVJnG7eRbZcXqzBQWhiHBTlQcoTYU01XuC7dmfR~vCLHUOgzZKZ~IyUwJkbi2Vz3ZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    wordCards: [
      {
        num: "01",
        heading: "Statement of the problem",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been",
      },
      {
        num: "02",
        heading: "Project presentation",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been",
      },
      {
        num: "03",
        heading: "Development of renderings",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been",
      },
    ],
  };

  const serviceFeaturesCard = [
    {
      heading: "Windows",
      desc: "Intartica embodies speed in every project. Our streamlined processes ensure swift transformations, bringing your vision to life without unnecessary delays, making your dream interior a reality in record time.",
    },
    {
      heading: "Doors",
      desc: "Intartica embodies speed in every project. Our streamlined processes ensure swift transformations, bringing your vision to life without unnecessary delays, making your dream interior a reality in record time.",
    },
    {
      heading: "Model Flats",
      desc: "Intartica embodies speed in every project. Our streamlined processes ensure swift transformations, bringing your vision to life without unnecessary delays, making your dream interior a reality in record time.",
    },
    {
      heading: "Interiors",
      desc: "Intartica embodies speed in every project. Our streamlined processes ensure swift transformations, bringing your vision to life without unnecessary delays, making your dream interior a reality in record time.",
    },
  ];

  const latestProjectImages = [
    "https://s3-alpha-sig.figma.com/img/2324/f670/8bf0761274d34c3ca78360632c0f4b5a?Expires=1704672000&Signature=Z9XDj~PHpUKsvxjXK8tCcr3wbI7Py8es3xpJMha3-lsMZXlxuPVTfY5cgpfLy-nTZ2v4PkgU8jJNu0sTyQTYGGcpZ0v2O3fh7FW2isR-xXQioMjAwzTb7ppeKN9XD2D5F1MvbDzOhbhILasCOipxaaKukS04aZvWh1pM-UJZBJ0xzigtERENvqjq4MKlV6tZBtQ-RvE81G53VROpHekAwHs-CvLKviYCyWrqifoMM4EYAAso7zLEbapzEHIviF1zazGnwsvKX8eQxZDriMxzLVJnG7eRbZcXqzBQWhiHBTlQcoTYU01XuC7dmfR~vCLHUOgzZKZ~IyUwJkbi2Vz3ZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/2324/f670/8bf0761274d34c3ca78360632c0f4b5a?Expires=1704672000&Signature=Z9XDj~PHpUKsvxjXK8tCcr3wbI7Py8es3xpJMha3-lsMZXlxuPVTfY5cgpfLy-nTZ2v4PkgU8jJNu0sTyQTYGGcpZ0v2O3fh7FW2isR-xXQioMjAwzTb7ppeKN9XD2D5F1MvbDzOhbhILasCOipxaaKukS04aZvWh1pM-UJZBJ0xzigtERENvqjq4MKlV6tZBtQ-RvE81G53VROpHekAwHs-CvLKviYCyWrqifoMM4EYAAso7zLEbapzEHIviF1zazGnwsvKX8eQxZDriMxzLVJnG7eRbZcXqzBQWhiHBTlQcoTYU01XuC7dmfR~vCLHUOgzZKZ~IyUwJkbi2Vz3ZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/2324/f670/8bf0761274d34c3ca78360632c0f4b5a?Expires=1704672000&Signature=Z9XDj~PHpUKsvxjXK8tCcr3wbI7Py8es3xpJMha3-lsMZXlxuPVTfY5cgpfLy-nTZ2v4PkgU8jJNu0sTyQTYGGcpZ0v2O3fh7FW2isR-xXQioMjAwzTb7ppeKN9XD2D5F1MvbDzOhbhILasCOipxaaKukS04aZvWh1pM-UJZBJ0xzigtERENvqjq4MKlV6tZBtQ-RvE81G53VROpHekAwHs-CvLKviYCyWrqifoMM4EYAAso7zLEbapzEHIviF1zazGnwsvKX8eQxZDriMxzLVJnG7eRbZcXqzBQWhiHBTlQcoTYU01XuC7dmfR~vCLHUOgzZKZ~IyUwJkbi2Vz3ZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/2324/f670/8bf0761274d34c3ca78360632c0f4b5a?Expires=1704672000&Signature=Z9XDj~PHpUKsvxjXK8tCcr3wbI7Py8es3xpJMha3-lsMZXlxuPVTfY5cgpfLy-nTZ2v4PkgU8jJNu0sTyQTYGGcpZ0v2O3fh7FW2isR-xXQioMjAwzTb7ppeKN9XD2D5F1MvbDzOhbhILasCOipxaaKukS04aZvWh1pM-UJZBJ0xzigtERENvqjq4MKlV6tZBtQ-RvE81G53VROpHekAwHs-CvLKviYCyWrqifoMM4EYAAso7zLEbapzEHIviF1zazGnwsvKX8eQxZDriMxzLVJnG7eRbZcXqzBQWhiHBTlQcoTYU01XuC7dmfR~vCLHUOgzZKZ~IyUwJkbi2Vz3ZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/2324/f670/8bf0761274d34c3ca78360632c0f4b5a?Expires=1704672000&Signature=Z9XDj~PHpUKsvxjXK8tCcr3wbI7Py8es3xpJMha3-lsMZXlxuPVTfY5cgpfLy-nTZ2v4PkgU8jJNu0sTyQTYGGcpZ0v2O3fh7FW2isR-xXQioMjAwzTb7ppeKN9XD2D5F1MvbDzOhbhILasCOipxaaKukS04aZvWh1pM-UJZBJ0xzigtERENvqjq4MKlV6tZBtQ-RvE81G53VROpHekAwHs-CvLKviYCyWrqifoMM4EYAAso7zLEbapzEHIviF1zazGnwsvKX8eQxZDriMxzLVJnG7eRbZcXqzBQWhiHBTlQcoTYU01XuC7dmfR~vCLHUOgzZKZ~IyUwJkbi2Vz3ZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/2324/f670/8bf0761274d34c3ca78360632c0f4b5a?Expires=1704672000&Signature=Z9XDj~PHpUKsvxjXK8tCcr3wbI7Py8es3xpJMha3-lsMZXlxuPVTfY5cgpfLy-nTZ2v4PkgU8jJNu0sTyQTYGGcpZ0v2O3fh7FW2isR-xXQioMjAwzTb7ppeKN9XD2D5F1MvbDzOhbhILasCOipxaaKukS04aZvWh1pM-UJZBJ0xzigtERENvqjq4MKlV6tZBtQ-RvE81G53VROpHekAwHs-CvLKviYCyWrqifoMM4EYAAso7zLEbapzEHIviF1zazGnwsvKX8eQxZDriMxzLVJnG7eRbZcXqzBQWhiHBTlQcoTYU01XuC7dmfR~vCLHUOgzZKZ~IyUwJkbi2Vz3ZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/2324/f670/8bf0761274d34c3ca78360632c0f4b5a?Expires=1704672000&Signature=Z9XDj~PHpUKsvxjXK8tCcr3wbI7Py8es3xpJMha3-lsMZXlxuPVTfY5cgpfLy-nTZ2v4PkgU8jJNu0sTyQTYGGcpZ0v2O3fh7FW2isR-xXQioMjAwzTb7ppeKN9XD2D5F1MvbDzOhbhILasCOipxaaKukS04aZvWh1pM-UJZBJ0xzigtERENvqjq4MKlV6tZBtQ-RvE81G53VROpHekAwHs-CvLKviYCyWrqifoMM4EYAAso7zLEbapzEHIviF1zazGnwsvKX8eQxZDriMxzLVJnG7eRbZcXqzBQWhiHBTlQcoTYU01XuC7dmfR~vCLHUOgzZKZ~IyUwJkbi2Vz3ZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  ];

  return (
    <>
      <Navbar />
      <SHeroSection />
      <div className="ssecond-container container d-flex">
        <div className="build-img">
          <img
            src="https://s3-alpha-sig.figma.com/img/f18f/79a4/01253e393833d3da01e30d1ee5ea8775?Expires=1704672000&Signature=WBtJZFsI6sg6f1hYfDmozcihzrx0W3OA9P~WjQzx8tluC8-vQRPa86Y062SKzVqab~gk204EcbcqkHMuDoodnyqjnDGlik2nSOB-OjZcY8Ilaeo5y5GL3K7LafmhiGzD5bLb4kS5EOY8cYoiuiNCj-D8AAzpTOShsU4rU9cWP6PphheBGYJZtiRjFL4fRTl8yd2ILK5tyGY~wTf08robAo6Mh9qqzEF6Xsmbc0fGDxruGf-sVSOTNDwyVpXGOvVXheGjI~4p0MDkdSXTrLS6TUIrhAiwNlwI3sEEM4Bg9p1bxUXaZYGwG3VjxwlRnsyrqUWiTjoUcYgtsRBMMJvhGQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="build-img"
          />
        </div>
        <div className="right-container d-flex flex-column justify-content-between">
          <h1>Transforming Structures into Spectacles</h1>
          <p>
            Elevate your constructions with our expertly designed windows and
            secure interiors with grand entrances tailored to your vision.
            Showcase developments with captivating model flats and add
            meticulous finishing touches that redefine perfection to your
            interiors or finishing works.
          </p>
          <button className="btn">Contact Us </button>
        </div>
      </div>
      <SSCard serviceFeaturesCard={serviceFeaturesCard} />
      <SHowWeWork howWeWorkInfo={howWeWorkInfo} />
      <div className="container my-7">
        <h2 className="l-project-image-container-h">Our Latest Project</h2>
        <div className="l-project-image-container">
          {latestProjectImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="image"
            />
          ))}
        </div>
      </div>

      <Sconnect />
      <NewletterSub />
      <Footer />
    </>
  );
};

export default ServiceBuilder;
