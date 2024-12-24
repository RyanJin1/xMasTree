import "./App.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="xmasTree">
      <FontAwesomeIcon icon={faStar} className="star" />
      <div className="blessing animate__animated animate__bounceIn">
        Merry Christmas!
      </div>
    </div>
  );
}

export default App;
