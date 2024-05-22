import logo from './logo.svg';
import './App.css';
import { MyComponents } from './components/MyComponents';
import { SecondComponents } from './components/SecondComponents';
import { ThirdComponent } from './components/ThirdComponent';

function App() {

  const medicalRecord = {
    height: "170",
    bloodGroup: "RhO+",
    allergies: "None"
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estructura inicial del proyecto y limpia.
        </p>
        <SecondComponents />
        <ThirdComponent 
          name = "Rogelio"
          lastName = "Menco"
          card = {medicalRecord}
        />
        <MyComponents />
      </header>
    </div>
  );
}

export default App;
