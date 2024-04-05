import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import avatarJessica from "../public/avatar-jessica.jpeg"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*fracment*/}
      <div className="contenedor">
        <div className="texto">
          <img src={avatarJessica} alt="jess"/>
          <h2>Jessica Randall</h2>
          <h3>London, United Kingdom</h3>
          <p>"Front-end developer and avid reader."</p>
        </div>
        <div className="botones">
          <button>GitHub</button>
          <button>Frontend Mentor</button>
          <button>LinkedIn</button>
          <button>Twitter</button>
          <button>Instagram</button>
        </div>
      </div>
    </>
  );
}

export default App;
