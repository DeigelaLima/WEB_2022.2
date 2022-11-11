import React from "react"
// import Estudante from "./Estudante"

const Disciplina = ({titulo,children}) => {

    return (
        <div>
            <h1>{titulo}</h1>
            {
                React.Children.map(
                    children,
                    (estudante)=> React.cloneElement(estudante,{disciplina:titulo})
                )
            }
        </div>
    )
}

export default Disciplina