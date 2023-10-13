import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Affirm() {
  const [quotes, setQuotes] = useState([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    // Make the API request when the component mounts
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        setQuotes(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex < quotes.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000); // Change the time interval as needed (e.g., every 5 seconds)

    return () => {
      clearInterval(timer); // Clear the timer when the component unmounts
    };
  }, [quotes]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container" data-aos="fade-left" data-aos-delay="1500">
      <div className="row d-flex justify-content-center">
        <div className="col d-flex align-items-center">
          <h1 id="quote-title">For Today:</h1>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        {quotes.length > 0 && (
          <div className="col d-flex align-items-center">
            <p className="quote">"{quotes[currentQuoteIndex].text}" </p>
            <p className="quote">- {quotes[currentQuoteIndex].author}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Affirm;
