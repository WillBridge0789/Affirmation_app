import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import "./css/styles.css";

function Image() {
  // Create an array of image file names
  const imageFiles = [
    "calm_img1.jpg",
    "calm_img2.jpeg",
    "calm_img3.jpg",
    "calm_img5.jpg",
    "calm_img6.jpg",
    "calm_img7.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(null);

  // Function to select a random image
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    return imageFiles[randomIndex];
  };

  useEffect(() => {
    // Select a random image when the component mounts
    setCurrentImage(getRandomImage());

    // Set up an interval to change the image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage(getRandomImage());
    }, 10000); // 10000 milliseconds (10 seconds)

    return () => {
      // Clear the interval when the component unmounts
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="container d-flex justify-content-center p-0 mt-4 mb-4"
      id="img-display"
    >
      <div className="row d-flex justify-content-center">
        {currentImage && (
          <img
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="1250"
            src={require(`/public/img/${currentImage}`)} // Assuming images are in a folder called 'images'
            alt="Random Calm Display"
            className="calm-imgs"
          />
        )}
      </div>
    </div>
  );
}
export default Image;
