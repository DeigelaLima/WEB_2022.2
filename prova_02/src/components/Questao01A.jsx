import React from "react"

const Questao01A = (props) => {
    const {nome, sobrenome, curso} = props
    return (
        <div>
             <b>Nome</b>: {nome}<br/> 
             <b>Sobrenome:</b> {sobrenome}<br/> 
             <b>Curso:</b> {curso}<br/> 
        </div>
    )
}

export default Questao01A