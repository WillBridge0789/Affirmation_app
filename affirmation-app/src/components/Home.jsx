import { useEffect } from "react";
import AOS from "aos";

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row d-flex align-items-center">
        <main id="hero-text" data-aos="fade-zoom-in" data-aos-delay="1500">
          <h1>Welcome to your daily affirmation</h1>
        </main>
      </div>
    </div>
  );
}

export default Home;
