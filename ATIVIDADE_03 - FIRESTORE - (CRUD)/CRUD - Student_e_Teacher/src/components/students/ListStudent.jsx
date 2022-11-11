import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { studentsList } from './data.js'
import axios from 'axios'

import FirebaseContext from '../../utils/FirebaseContext'
import StudentService from '../../services/StudentService'

//consumir o context
const ListStudentPage = () => {
    return (
        <FirebaseContext.Consumer>
            {value => <ListStudent firebase={value}/>}
        </FirebaseContext.Consumer>
    )
}

const ListStudent = (props) => {

    // const [students, setStudents] = useState(studentsList)
    const [students, setStudents] = useState([])
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
            StudentService.list_on_snapshot(
            // StudentService.list(
                props.firebase.getFirestoreDb(),
                (students) => {
                    // console.log(students)
                    setStudents(students)
                }
            //)
            )
            //console.log(props.firebase.getFirestoreDb())
        }
        ,
        []
    )

    function deleteStudentV2(id){
        if(window.confirm('Deseja excluir?')){
            StudentService.delete(
                props.firebase.getFirestoreDb(),
                ()=> {
                    //apontando para o students
                  let studentsTemp = students
                  for(let i=0; i<studentsTemp.length;i++){
                    if(studentsTemp[i].id === id){
                        studentsTemp.splice(i,1)
                        break
                    }
                  }
                  setStudents(studentsTemp)
                  setReload(!reload)
                },
                id
            )//delete
        }//if
    }//function
    

    function deleteStudent(id){
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
            StudentService.delete(
                props.firebase.getFirestoreDb(),
                ()=> {
                    let studentsResult = students.filter(
                        (student)=> students.id !== id
                    )
                    setStudents(studentsResult)
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
        
            return students.map(
                (element,index) => {
                    // element.key = index
                    return (
                      <tr>
                        <td>{element.id}</td>
                        <td>{element.name}</td>
                        <td>{element.course}</td>
                        <td>{element.ira}</td>
                        <td>
                            <Link to={'/editStudent/' + element.id} className='btn btn-primary'>
                                Editar
                            </Link>
                        </td>
                        <td>
                           <button className='btn btn-danger' onClick={()=>deleteStudentV2(element.id)}>
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
            <h1>Listar Estudante</h1>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Curso</th>
                        <th>IRA</th>
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

export default ListStudentPage