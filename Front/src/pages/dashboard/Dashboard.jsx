
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Container} from "./style"
import Form from "../../components/admin/watch/Form";
//import Users from "../../components/admin/users/Users"
import Buys from "../../components/admin/buys/Buys";
import Nav from "../../components/admin/nav/Nav";
//import Watches from "../../components/admin/watch/Watches"
import { addUsers } from "../../redux/actions/admin/addUsers";
import DataTable from "react-data-table-component"
import { addBuys } from "../../redux/actions/admin/addBuys";
import { updateUser } from "../../redux/actions/admin/updateUser";
import { updateWatch } from "../../redux/actions/admin/updateWatch";
import { getProducts } from "../../redux/Actions";
//import styled from "styled-components";

const Dashboard = ()=>{
    const allUsers = useSelector((state)=> state.allUsers)
    const allClocks = useSelector((state)=> state.allClocks)
    const allBuys = useSelector((state)=> state.allBuys)
    
    const dispatch = useDispatch()
    
    const dashboarprops = useCallback(()=>{
        dispatch(addUsers())
        dispatch(addBuys())
    },[dispatch])
    
    useEffect(()=>{
        dashboarprops()
    },[dashboarprops])
    
    const delUser = async(id,del)=>{
        let data = await dispatch(updateUser(id,del))
        console.log(data);
        dispatch(addUsers())
    }
    
    const delWatch = async(id,del)=>{
        let data = await dispatch(updateWatch(id,del))
        console.log(data);
        dispatch(getProducts())
    }
    const [editRole, setEditRole] = useState(false)
    
    const handleRole = async(e,id)=>{
        const {value} = e.target
        let data = await dispatch(updateUser(id,{role: value}))
        setEditRole(false)        
        dispatch(addUsers())
    }
    
    const columnsUser = [
        {
            name: "Usuario:",
            selector: row => row.userName,
            sortable: true,
            fixed: "30px",
        },
        {
            name: "email:",
            selector: row => row.email,
            sortable: true
        },
        {
            name: "Password:",
            selector: row => row.password
        },
        {
            name: "Tipo:",
            selector: row => editRole?
                <select onChange={(e)=>handleRole(e,row.id)} value={row.role}>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select> 
                : <div>{row.role} <button onClick={()=>setEditRole(!editRole)}>&#x270E;</button></div>,
            sortable: true
        },
        {
            name: "Registro:",
            selector: row => row.provider,
            sortable: true
        },
        {
            name: "Activo",
            selector: row => row.del ? (
                <div className="btnDiv">
                    <button onClick={()=> delUser(row.id,{del: !row.del})} id="btn1">NO</button>
                </div>
                ) : (
                    <div className="btnDiv">
                        <button onClick={()=> delUser(row.id,{del: !row.del})} id="btn2">SI</button>
                    </div>
                    ),
            sortable: true
            
        },
        
    ]
    const columnsWatch = [
        {
            name: "Reloj:",
            selector: row => (<img className="imgTable" src={row.image[0]}/>),
        },
        {
            name: "Marca:",
            selector: row => row.brandName,
            sortable: true
        },
        {
            name: "Modelo:",
            selector: row => row.model,
            sortable: true
        },
        {
            name: "Color:",
            selector: row => row.colorName,
            sortable: true
        },
        {
            name: "Estilo:",
            selector: row => row.styleName,
            sortable: true
        },
        {
            name: "Genero:",
            selector: row => row.gender,
            sortable: true
        },
        {
            name: "Malla:",
            selector: row => row.strapName,
            sortable: true
        },
        {
            name: "Activo",
            selector: row => row.del ? (
                <div className="btnDiv">
                    <button onClick={()=> delWatch(row.id,{del: !row.del})} id="btn1">NO</button>
                </div>
                ) : (
                    <div className="btnDiv">
                        <button onClick={()=> delWatch(row.id, {del: !row.del})} id="btn2">SI</button>
                    </div>
                    ),
            sortable: true
            
        },
        
    ]
    
    
    console.log("todos",allUsers);
    return (
        <Container>
            <Nav/>
            <div className="containerTable">
                <Buys/>
                
                <div className="tableUser">
                    <DataTable
                     columns={columnsUser}
                     data={allUsers}
                     fixedHeader= {true}
                     fixedHeaderScrollHeight="300px"                     
                     progressComponent={<h1>Cargando Usuarios</h1>}   
                     highlightOnHover
                    />
                </div>
                
                <div className="tableWatch">
                    <DataTable
                     columns={columnsWatch}
                     data={allClocks}
                     fixedHeader= {true}
                     fixedHeaderScrollHeight="300px"
                     progressPending={!allClocks}
                     progressComponent={<h1>Cargando Relojes</h1>}
                        
                     highlightOnHover
                    />
                </div>
                <Form/>
            </div>
        </Container>
    )
}

export default Dashboard;

