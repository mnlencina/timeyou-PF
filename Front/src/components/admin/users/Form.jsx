
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
    
    const handlerChange = (e)=>{
        const{name,value} = e.target
        console.log(name,value)
        setUpUser(
            {
              ...upUser,
              [name]: value
            }
          )
    }
    
    const logUser = async()=>{
        const NEW = await dispatch(createUser(upUser))
        console.log(NEW);
        dispatch(addUsers())
    }
 
    return(
        <Container>
            <div className="divForm">
                <h2>Nuevo Usuario</h2>
                <input onChange={handlerChange} type="text" placeholder="Ingrese el Nombre" name="userName"/>
                <input onChange={handlerChange} type="text" placeholder="Ingrese el email" name="email"/>
                <input onChange={handlerChange} type="password" placeholder="Ingrese Contraseña" name="password" />
                
                <button className="btnUp" onClick={logUser}>CARGAR</button>
            </div>
                <button className="btnClose" onClick={btnClose}>Cerrar</button>
            
        </Container>
    )
    }
    
    export default FormUser