import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc, query, onSnapshot } from 'firebase/firestore'

// Camada que fica no meio do jsx e da base de dados
class TeacherService {

    //listar dos os elementos do faribase
    static list = (firestoreDb,callback)=> {
        getDocs(collection(firestoreDb, 'teacher'))
        .then(
            (teacherSnapshot)=>{
                const teachers = []
                //Laço
                teacherSnapshot.forEach(
                    (teacher)=>{
                        //console.log(student.id)
                        const id = teacher.id
                        const {name,course,wage} = teacher.data()
                        // console.log(name + " " + course + " " + ira)
                        //adicionando elemento no vetor
                        teachers.push({id,name,course,wage})
                    }
                )//forEach
                callback(teachers)
            }//teacherSnapshot
        )//then
        .catch(error=>console.log(error))
    }

    static list_on_snapshot = (firestoreDb,callback)=>{
        const q = query(collection(firestoreDb, 'teacher'))
        //snapshot para escutar
        const unscribe = onSnapshot(
            q,
            (querySnaphot)=>{
                const teachers = []
                querySnaphot.forEach(
                    (document)=>{
                        const id = document.id
                        const{name,course,wage} = document.data()
                        teachers.push({id,name,course,wage})

                    }//document
                )//forEach
                callback(teachers)
            }//querySnaphot
        )//onSnapshot
    }


    // conexão, como eu vou retornar os dados(callback) e o estudante
    //criação
    //static não preciso criar um objeto
    static add = (firestoreDb, callback, teacher) => {
        addDoc(collection(firestoreDb, 'teacher'),teacher)
        .then(
            (docRef)=>{
                callback(docRef.id)
            }
        )
        .catch(error=>console.log(error))
    } 

    static retrive = (firestoreDb, callback, id) => {
        getDoc(doc(firestoreDb, 'teacher', id))
        .then(
            (docSnap)=>{
                if(docSnap.exists()){
                    // console.log("Document data:", docSnap.data())
                    callback(docSnap.data())
                }
            }
        )
        .catch(error=>console.log(error))
    }

    static update = (firestoreDb, callback, id, teacher) => {
        updateDoc(
            doc(firestoreDb, 'teacher', id),
            teacher)
        .then(
            ()=>{
                callback(true)
            }
        )
        .catch(error=>console.log(error))
    }

    static delete = (firestoreDb, callback, id) => {
        deleteDoc(doc(firestoreDb, 'teacher', id))
        .then(()=>callback(true))
        .catch(error=>console.log(error))
    }
}

    

export default TeacherService