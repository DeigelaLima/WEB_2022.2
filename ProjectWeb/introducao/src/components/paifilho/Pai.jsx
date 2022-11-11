import React from "react"
import Filho from "./Filho"

const Pai = () => {

    const callbackPai = (msg) => {
        alert('Oi meu filho ' + msg)
    }

    return(
        <div>
            {/* criando propriedade callbackPai */}
            <Filho nomePai = 'Pai da Silva' 
              callbackPai={callbackPai}/>
        </div>
    )
}

export default Pai