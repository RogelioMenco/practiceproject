import logo from "./logo.svg";
import "./App.css";
import { MyComponents } from "./components/MyComponents";
import { SecondComponents } from "./components/SecondComponents";
import { ThirdComponent } from "./components/ThirdComponent";
import { Child } from "./components/Child";
import { useState } from "react";
import { FourthComponent  } from "./components/FourthComponent";

function App() {
  const [name, setName] = useState("Lina");
  const [message, setMessage] = useState("");

  const addMessage = (message) => {
    console.log(message);
    setMessage(message);
  };

  const medicalRecord = {
    height: "160",
    bloodGroup: "RhO+",
    allergies: "None",
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Estructura inicial del proyecto y limpia.</p>
        <div>
          <hr />
          <FourthComponent />
          <hr />
        </div>
        <h2>Mensaje del hijo: </h2>
        <p>{message}</p>
        <Child name={name} setName={setName} addMessage={addMessage} />
        <SecondComponents />
        <ThirdComponent name="Inés" lastName="Oliveros" card={medicalRecord} />
        <MyComponents />
      </header>
    </div>
  );
}

export default App;
