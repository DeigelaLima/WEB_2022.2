import './App.css';
// import OlaMundo from './components/OlaMundo';
// import Estudante from './components/Estudante';
// //import {Vecna as V,Eleven, Will} from './components/StrangerThings';
// import * as StrangerThings from './components/StrangerThings';
// import Calculadora from './components/Calculadora';
// import IMC from './components/IMC';
// import Grupo from './components/vingadores/Grupo'
// import Heroi from './components/vigadores/Heroi'
// import Disciplina from './components/universidade/Disciplina'
// import Estudante from './components/universidade/Estudante'
//import Pai from './components/paifilho/Pai';
import Contador from './components/estados/Contador';
import VotaCidades from './components/estados/VotaCidades';



function App() {
  return (
    <div className="App">
      {/* <Estudante
        nome = "Deigela"
        curso = "Ciência da Computação"
        universidade = "UFC Quixadá"
      />
      {/* <V/> */}
      {/* <StrangerThings.Vecna/>

      <Calculadora op="SUB" x={10} y={20}/>

      <IMC peso={43} altura={1.62}/> */}

      {/* <Disciplina titulo = 'Engenharia de Software'>
          <Estudante nome = 'Deigela'
                    curso='Ciência da Computação'
                    universidade='UFC - Campus Quixadá'

          />
      </Disciplina> */}

      {/* <Grupo titulo='Vingadores'>
        <Heroi nome='Capitão América' />
        <Heroi nome='Hulk' />
        <Heroi nome='Viúva Negra' />
        <Heroi nome='Homem de Ferro' />
        <h5>Fim do time!</h5>
      </Grupo> */}

      {/* <Pai/> */}

      <VotaCidades/>

      {/* <Contador/> */}
    </div>
  );
}

export default App;
