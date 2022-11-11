import React, { useState } from 'react';

const Questao02 = () => {

    const [num1,setNum1] = useState(0)
    const [num2,setNum2] = useState(0)
    const [result,setResult] = useState()

    return (
        <form className="form-group question">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
            <h1> Calculadeira </h1>
            <input type="number" name="Numero1" placeholder='Número 1' onChange={(event) => setNum1(event.target.value)}></input><br/>
            <input type="number" name="Numero2" placeholder='Número 2' onChange={(event) => setNum2(event.target.value)}></input><br/>
            
            <button type="button" className="btn btn-primary buttonpad" onClick={() => setResult(num1*1 + num2*1)}>+</button>
            <button type="button" className="btn btn-primary buttonpad" onClick={() => setResult(num1 - num2)}>-</button>
            <button type="button" className="btn btn-primary buttonpad" onClick={() => setResult(num1 * num2)}>*</button>
            <button type="button" className="btn btn-primary buttonpad" onClick={() => setResult(num1 / num2)}>/</button>

            <p>Resultado:{result}</p>
        </form>
      
    )
    
}

export default Questao02