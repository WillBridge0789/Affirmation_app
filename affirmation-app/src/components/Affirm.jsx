import { useEffect, useState } from "react";
import AOS from "aos";
// import "./css/styles.css";
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
    }, 10000); // Change the time interval as needed (e.g., every 5 seconds)

    return () => {
      clearInterval(timer); // Clear the timer when the component unmounts
    };
  }, [quotes]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="container m-4 p-3"
      id="quotes-and-authors"
      data-aos="fade-left"
      data-aos-delay="1500"
    >
      <div className="row d-flex justify-content-center">
        {quotes.length > 0 && (
          <>
            <p className="quote d-flex justify-content-center">
              "{quotes[currentQuoteIndex].text}"{" "}
            </p>
            <p className="quote d-flex justify-content-center">
              - {quotes[currentQuoteIndex].author}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Affirm;
