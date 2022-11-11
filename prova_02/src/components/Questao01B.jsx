import React from 'react';

const Questao01B = ({children}) => {

    let disciplinas = ["CG", "web", "educação ambiental", "ead", "adestração de ornitorrinco"]
    return (
        <div>
            <h1>Disciplinas</h1>
            <ul>
                {React.Children.map(disciplinas,(disciplina)=> <li>{disciplina}</li>)}
            </ul>
        </div>
    )
}

export default Questao01B