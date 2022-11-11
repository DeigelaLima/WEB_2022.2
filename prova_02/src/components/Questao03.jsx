import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

const Questao03 = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const offset = searchParams.get('offset') || 0 // retorna o parametro desejado (nesse casso, o offset)
    
    const [pokemons, setPokemons] = useState([])
    //como fosse um construtor
    useEffect(
        () => {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset=' + offset)
            //se der certo
            .then(
                (response)=>{
                    //seta o pokemans
                    setPokemons(response.data.results)
                }
            )
            //se der errado
            .catch(
                (error)=>{
                    console.log(error)
                }
            )
        },
        // lista de variaveis
        [offset]
    )

    const showNextPokemons = () => {
        setSearchParams({offset: offset/1 + 10})
    }

    return (
        <div className='question'>
            <h1> Pokemons</h1>
            <ul>
                {pokemons.map((pokemon) => <li>{pokemon.name}</li>)}
            </ul>

            <button type="button" onClick={() => showNextPokemons()}>mostrar proximos pokemoins</button>
        </div>
    )
}

export default Questao03
