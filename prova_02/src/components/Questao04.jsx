import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'

const Questao04 = () => {

    const [countries, setCountries] = useState([])
    const [populousCountry, setPopulousCountry] = useState({name: "", population: 0})
    
    const calculatePopulousCountry = (countries) => {
        var bigPopulation = 0
        var bigCountry;
        countries.forEach(
            country => {
                if(country.population > bigPopulation){
                    bigPopulation = country.population
                    bigCountry = country
                }
            }
        )
        setPopulousCountry(bigCountry)
    }

    //como fosse um construtor
    useEffect(
        () => {
            axios.get('https://restcountries.com/v2/region/africa?fields=name,population')
            //se der certo
            .then(
                (response)=>{
                    //seta o paises
                    console.log(response.data)
                    setCountries(response.data)
                    calculatePopulousCountry(response.data)
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
        []
    )

    
    return (
        <div className="question">
            <h1> Lista de paises da África </h1>
            
            <ul>
                {countries.map((country) => <li>{country.name}, {country.population}</li>)}
            </ul>

            <h3> País mais populoso da África </h3>
            {populousCountry.name} com {populousCountry.population} habitantes


        </div>
    )
}

export default Questao04
