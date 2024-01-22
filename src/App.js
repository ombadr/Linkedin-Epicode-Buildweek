import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import Analisi from './components/Analisi';
import Risorse from "./components/Risorse";
import Attivita from "./components/Attivita";
import Formazione from "./components/Formazione";
import Interessi from "./components/Interessi";
import ModificaProfilo from "./components/ModificaProfilo";

function App() {
  return (
    <div>
      <ModificaProfilo/>
      <Analisi />
      <Risorse />
      <Attivita/>
      <Formazione />
      <Interessi/>
      
    </div>
  );
}

export default App;
