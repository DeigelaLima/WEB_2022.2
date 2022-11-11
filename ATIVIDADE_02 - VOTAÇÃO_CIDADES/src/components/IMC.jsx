import React from "react"



function calcularIMC(props) {
    const { peso, altura } = props
    const imc = (peso / (altura * altura))

    function tabelaIMC() {

        const situacao = imc
    
        if(situacao < 17){
            return "Muito abaixo do peso."
        }
        //entre 17 e 18,49
        else if(situacao >= 17 && situacao <= 18.49){
            return "Abaixo do peso."
        }
        // entre 18,50 e 24,99
        else if(situacao >= 18,50 && situacao <= 24.99){
            return "Peso normal."
        }
        // entre 25 e 29,99
        else if(situacao >= 25 && situacao <= 29.99){
            return "Acima do peso."
        }
        // entre 30 e 34,99
        else if(situacao >= 30 && situacao <= 34.99){
            return "Obesidade I."
        }
        // entre 35 e 39,99
        else if(situacao >= 35 && situacao <= 39.99){
            return "Obesidade II (severa)."
        }
        // acima de 40
        else if(situacao > 40){
            return "Obesidade III (móbida)."
        }
    
    }

    return (
        <div>
            IMC é: {imc.toFixed(2)}
            <br />
            A sua situação é: {tabelaIMC()}
        </div>
    )

}

export default calcularIMC
