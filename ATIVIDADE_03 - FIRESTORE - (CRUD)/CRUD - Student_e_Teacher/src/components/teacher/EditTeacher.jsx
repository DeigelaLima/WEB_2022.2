import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

import FirebaseContext from '../../utils/FirebaseContext'
import TeacherService from '../../services/TeacherService'

//consumir o context
const EditarTeacherPage = () => {
    return (
        <FirebaseContext.Consumer>
            {/* conexao farebase */}
            {value => <EditarTeacher firebase={value}/>}
        </FirebaseContext.Consumer>
    )
}


const EditarTeacher = (props) => {

    const [name,setName] = useState('')
    const [course,setCourse] = useState('')
    const [wage,setWage] = useState(0.0)
    const navigate = useNavigate() //vai para proxima tela
    const params = useParams()

    // Aparece os dados no formulario
    useEffect(
        () => {
            TeacherService.retrive(
                props.firebase.getFirestoreDb(),
                (teacher)=>{
                    setName(teacher.name)
                    setCourse(teacher.course)
                    setWage(teacher.wage)
                },
                params.id
            )

            //console.log(params.id)
            // axios.get('http://localhost:3001/students/' + params.id)
            // .then(
            //     (response)=>{
            //         //console.log(response.data.name)
            //         setName(response.data.name)
            //         setCourse(response.data.course)
            //         setIra(response.data.ira)
            //     }
            // )
            // .catch((error)=>console.log(error))
        },
        []
    )

    const handleSubmit = (event) => {
        event.preventDefault()
        const teacherUpdated = {name,course,wage}
        TeacherService.update(
            props.firebase.getFirestoreDb(),
            (result)=>{
                navigate('/listTeacher')
            },
            params.id,
            teacherUpdated
        )
        // Com os dados que eu quero atualizar, passando o id mais o objeto newStudentUpdated
        // axios.put('http://localhost:3001/students/' + params.id,studentUpdated)
        // .then(
        //     (response)=>{
        //         navigate('/listStudent')
        //     }
        // )
        // .catch((error=>console.log(error)))
    }

    return (
        <div style={{marginTop:20}}>
            <h2>Editar Professor</h2>

            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Nome:</label>
                    <input 
                        type="text" 
                        className='form-control'
                        placeholder='Digite seu nome'
                        value={(name === null || name === undefined)?'':name}
                        onChange={
                            (event)=>{
                                //console.log(event.target.value)
                                setName(event.target.value)
                            }
                        }
                    />
                </div>

                <div className='form-group'>
                    <label>Curso:</label>
                    <input 
                        type="text" 
                        className='form-control'
                        placeholder='Digite seu curso'
                        //{(course === null || course === undefined)?'':name} mesma coisa da linha 64
                        value={course ?? ''}
                        onChange={
                            (event)=>{
                                setCourse(event.target.value)
                            }
                        }
                    />
                </div>

                <div className='form-group'>
                    <label>Salário:</label>
                    <input 
                        type="number"
                        step='any'
                        className='form-control'
                        placeholder='Digite seu salário'
                        value={wage ?? 0.0}
                        onChange={
                            (event)=>{
                                setWage(event.target.value)
                            }
                        }
                    />
                </div>

                <div className='form-group' style={{marginTop:15}}>
                    <input 
                        type="submit" 
                        value="Editar Professor"
                        className='btn btn-primary'
                    />
                </div>
            </form>
        </div>
    )
}

export default EditarTeacherPage


// const EditTeacher = () => {
//     return (
//         <div>
//             <h1>Editar Professor</h1>
//         </div>
//     )
// }

// export default EditTeacher