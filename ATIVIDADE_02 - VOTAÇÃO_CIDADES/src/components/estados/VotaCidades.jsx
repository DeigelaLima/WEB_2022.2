import { useState } from "react"

const VotaCidades = () => {

    const [quixada, setQuixada] = useState(0)
    const [limoeiro, setLimoeiro] = useState(0)
    const [crateus, setCrateus] = useState(0)
    const [resultado, setResultado] = useState("")

    const modificarQuixada = () => {
        setQuixada(quixada + 1);
       
    }

    const modificarLimoeiro = () => {
        setLimoeiro(limoeiro + 1)
        
    }

    const modificarCrateus = () => {
        setCrateus(crateus + 1)
        
    }

    const ResultDeVoltacao = () => {

        if(quixada > limoeiro){
            if(quixada > crateus){
                setResultado("Quixadá ganhou a votação")
            }
            else{
                setResultado("Crateús ganhou a votação")
            }
        }
        else{
            if(limoeiro > crateus){
                setResultado("Limoeiro ganhou a votação")
            }
            else{ 
                setResultado("Crateus Crateús ganhou a votação")
            }
              
        }
    }
 
    return(
        <div>
            <div>
                <h2>Quixadá: {quixada}</h2>
                <h2>Limoeiro do Norte: {limoeiro}</h2>
                <h2>Crateús: {crateus}</h2>
                <h2>Resultado da votação: {resultado}</h2>
            </div>
            <div>
                <div style={{
                    display: 'flex',
                    gap:"1rem",
                    justifyContent: 'center',
                    marginBottom:"1rem",
                    
                }}>
                    <button onClick={modificarQuixada}>Votar Quixadá</button>
                    <button onClick={modificarLimoeiro}>Votar Limoeiro do Norte</button>
                    <button onClick={modificarCrateus}>Votar Crateús</button>
                </div>
                <button onClick={ResultDeVoltacao}>RESULTADO</button>
            </div>
            
        </div>
    )

}

export default VotaCidades