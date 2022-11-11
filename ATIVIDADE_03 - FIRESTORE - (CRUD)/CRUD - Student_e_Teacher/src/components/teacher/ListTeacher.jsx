import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { studentsList } from './data.js'
import axios from 'axios'

import FirebaseContext from '../../utils/FirebaseContext'
import TeacherService from '../../services/TeacherService'

//consumir o context
const ListTeacherPage = () => {
    return (
        <FirebaseContext.Consumer>
            {value => <ListTeacher firebase={value}/>}
        </FirebaseContext.Consumer>
    )
}

const ListTeacher = (props) => {

    // const [students, setStudents] = useState(studentsList)
    const [teachers, setTeachers] = useState([])
    const [reload, setReload] = useState(false)

    //como se fosse um construtor
    // useEffect(
    // () => {
    //         // console.log('teste')
    //         axios.get('http://localhost:3001/students')
    //         //se dê certo
    //         .then(
    //             (response)=>{
    //                 // console.log(response.data)
    //                 setStudents(response.data)
    //             }
    //         )
    //         //se dê errado
    //         .catch(
    //             (error)=>{
    //                 console.log(error)
    //             }
    //         )
    //     },
    //    //  lista de variaveis
    //     []
    // )
    useEffect(
        () => {
            TeacherService.list_on_snapshot(
            // StudentService.list(
                props.firebase.getFirestoreDb(),
                (teachers) => {
                    // console.log(students)
                    setTeachers(teachers)
                }
            //)
            )
            //console.log(props.firebase.getFirestoreDb())
        }
        ,
        []
    )

    function deleteTeacherV2(id){
        if(window.confirm('Deseja excluir?')){
            TeacherService.delete(
                props.firebase.getFirestoreDb(),
                ()=> {
                    //apontando para o students
                  let teachersTemp = teachers
                  for(let i=0; i<teachersTemp.length;i++){
                    if(teachersTemp[i].id === id){
                        teachersTemp.splice(i,1)
                        break
                    }
                  }
                  setTeachers(teachersTemp)
                  setReload(!reload)
                },
                id
            )//delete
        }//if
    }//function
    

    function deleteTeacher(id){
        // if(window.confirm('Deseja excluir?')){
        //     axios.delete('http://localhost:3001/students/' + id)
        //     .then(
        //         ()=>{
        //             let result = students.filter((student) => student.id !== id)
        //             setStudents(result)
        //         }
        //     )
        //     .catch(error=>console.log(error))
        // }
        if(window.confirm('Deseja excluir?')){
            TeacherService.delete(
                props.firebase.getFirestoreDb(),
                ()=> {
                    let teachersResult = teachers.filter(
                        (teacher)=> teachers.id !== id
                    )
                    setTeachers(teachersResult)
                },
                id
            )//delete
        }//if
    }//function

    const generateTableBody = () => {
            // return (
            // <div>
            //     {JSON.stringify(studentsList)}
            // </div>
        
            return teachers.map(
                (element,index) => {
                    // element.key = index
                    return (
                      <tr>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.course}</td>
                        <td>{element.wage}</td>
                        <td>
                            <Link to={'/editTeacher/' + element.id} className='btn btn-primary'>
                                Editar
                            </Link>
                        </td>
                        <td>
                           <button className='btn btn-danger' onClick={()=>deleteTeacherV2(element.id)}>
                                Apagar
                           </button>
                        </td>
                      </tr>
                    )
                }
                
            )
    }

    return (
        <div>
            <h1>Listar Professor</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>Salário</th>
                        <th colSpan={2}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {generateTableBody()}
                </tbody>
            </table>
        </div>
    )
}

export default ListTeacherPage




// const ListTeacher = () => {
//     return (
//         <div>
//             <h1>Listar Professor</h1>
//         </div>
//     )
// }

// export default ListTeacher