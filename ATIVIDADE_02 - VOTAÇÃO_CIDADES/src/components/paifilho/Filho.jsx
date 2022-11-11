import React from "react"
//Recebe o pai
const Filho = ({nomePai,callbackPai}) => {

    return(
        <div>
            <button
                onClick={()=>callbackPai('Filho da Silva')}
            >
                Oi {nomePai}!
            </button>
        </div>
    )
}

export default Filho