import './App.css';
import { Router } from 'react-router-dom';
import Questao01 from './components/Questao01';
import Questao01A from './components/Questao01A';
import Questao01B from './components/Questao01B';
import Questao02 from './components/Questao02';
import Questao03 from './components/Questao03';
import Questao04 from './components/Questao04';

function App() {
  return (
    <div className="App">
      <Questao01>
        <Questao01A
          nome = "Deigela"
          sobrenome = "Lima"
          curso = "Ciência da Computação"
        />
        <Questao01B/>
      </Questao01>

      <Questao02/>

      <Questao03/>

      <Questao04/>

    </div>
  );
}

export default App;
