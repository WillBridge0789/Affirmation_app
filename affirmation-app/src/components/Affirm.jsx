const { useState, useEffect } = require("react");

function shuffleAffirmations(array) {
  const shuffledAffirmations = [...array];
  for (let i = shuffledAffirmations.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledAffirmations[i], shuffledAffirmations[j]] = [
      shuffledAffirmations[j],
      shuffledAffirmations[i],
    ];
  }
  return shuffledAffirmations;
}

function Affirm() {
  const [affirmations, setAffirmations] = useState([]);
  const [currentAffirmationIndex, setCurrentAffirmationIndex] = useState(0);

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const shuffleData = shuffleAffirmations(data);
        setAffirmations(shuffleData);
      });
  }, []);

  const nextAffirmation = () => {
    setCurrentAffirmationIndex(
      (prevIndex) => (prevIndex + 1) % affirmations.length
    );
  };

  return (
    <div className="container">
      <div className="row d-flex justify-content-center m-3">
        <h1 className="d-flex justify-content-center">For Today:</h1>
      </div>
      <div className="row d-flex justify-content-center m-3">
        {/* {affirmations.map((affirmation, index) => (
                <h2 key={index}>{affirmation.text}</h2>
              ))} */}
        <p className="d-flex justify-content-center">{affirmations[currentAffirmationIndex]?.text}</p>
        <button onClick={nextAffirmation}>Next Affirmation</button>
      </div>
    </div>
  );
}

export default Affirm;
