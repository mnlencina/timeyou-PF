
import { useState } from "react"
import { Container } from "./style"
import { useDispatch } from "react-redux"
import { createUser } from "../../../redux/Actions"
import { addUsers } from "../../../redux/actions/admin/addUsers"

const FormUser =({btnClose})=>{
    const dispatch = useDispatch()
    const [upUser, setUpUser] = useState({
        userName:"",
        email:"",
        password:"",
    })
    
    const [error, setError] = useState({
        nameUser:"",
        password: ""
    })
       
    
    const handlerChange = (e)=>{
        const{name,value} = e.target
        console.log(name,value)
        setUpUser(
            {
              ...upUser,
              [name]: value
            }
          )
        if(upUser.userName.length >= 6 ) {
            setError({...error, nameUser: ""});
         } 
        if(upUser.password.length >= 6) { 
            setError({...error, password:""})
         }
       
    }
    
    const logUser = async()=>{
        if(upUser.userName.length < 6 ) {
           return setError({...error, nameUser:"El Nombre debe tener mas de 6 caracteres"});
        } 
        if(upUser.password.length < 6) { 
            return setError({...error, password:"La contraseña debe tener mas de 6 caracteres"})
        } 
        if(error.nameUser !== "" && error.password !== "") {
            const NEW = await dispatch(createUser(upUser))
            console.log(NEW)
            dispatch(addUsers())        
        }
    }
 
    return(
        <Container>
            <div className="divForm">
                <h2>Nuevo Usuario</h2>
                <input onChange={handlerChange} type="text" maxLength={10} placeholder="Ingrese el Nombre" name="userName"/>
                {error.nameUser !== "" && <span>{error.nameUser}</span>}
                <input onChange={handlerChange} type="text" maxLength={35} placeholder="Ingrese el email" name="email"/>
                
                <input onChange={handlerChange} type="password" maxLength={10} placeholder="Ingrese Contraseña" name="password" />
                {error.password !== "" && <span>{error.password}</span>}
                
                <button type="submit" className="btnUp" onClick={logUser}>CARGAR</button>
            </div>
                <button className="btnClose" onClick={btnClose}>Cerrar</button>
            
        </Container>
    )
    }
    
    export default FormUser