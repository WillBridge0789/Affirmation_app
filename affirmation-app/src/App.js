import Home from "./components/Home";
import "./css/styles.css";
import Affirm from "./components/Affirm";
import Image from "./components/Image";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div id="main-app">
      <Home />
      <Image />
      <Affirm />
    </div>
  );
}

export default App;
