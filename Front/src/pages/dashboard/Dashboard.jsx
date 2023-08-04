
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Container} from "./style"
import Sidebar from "../../components/admin/sidebar/Sidebar";
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
import FormWatchUpdate from "../../components/admin/watch/FormUpdate";

//import styled from "styled-components";

const Dashboard = ()=>{
    const [newWat, setNewWat] = useState(false)
    const [updateW, setUpdateW] = useState(false)
    const allUsers = useSelector((state)=> state.allUsers)
    const allClocks = useSelector((state)=> state.allClocks)
    //const allBuys = useSelector((state)=> state.allBuys)
    
    const [view, setView] = useState("");
    const handleView = (viewName) => {
    setView(viewName);
    };
    
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
        console.log(data);
        setEditRole(false)        
        dispatch(addUsers())
    }
    
    const [wUpdate, setWUpdate] = useState({})
    const editWatches =(row)=>{
        setWUpdate(row)
        setUpdateW(true)        
    }
    
    const columnsUser = [
        {
            name: "Usuario:",
            selector:"userName",
            cell: row => row.userName,
            sortable: true,
            //width: "100px",
        },
        {
            name: "email:",
            selector: "email",
            cell: row => row.email,
            sortable: true
        },
        /* {
            name: "Password:",
            selector: row => row.password
        }, */
        {
            name: "Tipo:",
            selector: "role",
            cell: row => editRole?
                <select onChange={(e)=>handleRole(e,row.id)} value={row.role}>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select> 
                : <div className="tableRole">
                    <span>
                        {row.role.charAt(0).toUpperCase() + row.role.slice(1)} 
                    </span>
                    <button onClick={()=>setEditRole(!editRole)}>&#x270E;</button>
                </div>,
            sortable: true,
            //width:"250px",
            
        },
        {
            name: "Registro:",
            selector: "provider",
            cell: row => row.provider.charAt(0).toUpperCase() + row.provider.slice(1),
            sortable: true
        },
        {
            name: "Activo",
            selector: "del",
            cell: row => row.del ? (
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
            selector: "image",
            cell: row => (<img className="imgTable" src={row.image[0]}/>),
        },
        {
            name: "Marca:",
            selector: "brandName",
            cell: row => row.brandName.charAt(0).toUpperCase() + row.brandName.slice(1),
            sortable: true
        },
        {
            name: "Modelo:",
            selector: "model",
            cell: row => row.model.charAt(0).toUpperCase() + row.model.slice(1),
            sortable: true
        },
        {
            name: "Precio: U$s",
            selector: "price",
            cell: row => row.price,
            sortable: true
        },
        {
            name: "Color:",
            selector: "colorName",
            cell: row => row.colorName.charAt(0).toUpperCase() + row.colorName.slice(1),
            sortable: true
        },
        {
            name: "Estilo:",
            selector: "styleName",
            cell: row => row.styleName.charAt(0).toUpperCase() + row.styleName.slice(1),
            sortable: true
        },
        {
            name: "Genero:",
            selector: "gender",
            cell: row => row.gender.charAt(0).toUpperCase() + row.gender.slice(1),
            sortable: true
        },
        {
            name: "Malla:",
            selector: "strapName",
            cell: row => row.strapName.charAt(0).toUpperCase() + row.strapName.slice(1),
            sortable: true
        },
        {
            name: "Acción:",
            selector: "del",
            cell: row => (
                <div className="divAction">
            {row.del ? (
                <div className="btnDiv">
                    <button onClick={()=> delWatch(row.id,{del: !row.del})} id="btn1">NO</button>
                </div>
                ) : (
                    <div className="btnDiv">
                        <button onClick={()=> delWatch(row.id, {del: !row.del})} id="btn2">SI</button>
                    </div>
                    )}
                    <button onClick={()=>editWatches(row)}>&#x270E;</button>
                </div>
            ),
            sortable: true
            
        },
        
    ]
    
    const dataExpan = ({data})=> {
        console.log(data);
        return (
            <div>
                <span>Descripción: {data.description} </span><span>Funciones: {data.Functions.map(s=>` -${s.name} `)}</span>
            </div>
        )
    };
    
    
    
    return (
        <Container>
            <Nav/>
            <div className="home">
            <Sidebar handleView={handleView} setNewWat={setNewWat} />
            
            <div className="containerTable">                
                {view === "buys" &&<Buys/>}
                
                {view === "users" && <div className="tableUser">
                    <DataTable 
                     columns={columnsUser}
                     data={allUsers}
                     fixedHeader= {true}
                     fixedHeaderScrollHeight="300px"                     
                     progressComponent={<h1>Cargando Usuarios</h1>}   
                     highlightOnHover
                     pointerOnHover
                     responsive
                    />
                </div>}
                
                {view === "watches" && <div className="tableWatch">
                    <DataTable
                     columns={columnsWatch}
                     data={allClocks}
                     fixedHeader= {true}
                     fixedHeaderScrollHeight="300px"
                     progressPending={!allClocks}
                     progressComponent={<h1>Cargando Relojes</h1>}
                     pointerOnHover   
                     highlightOnHover
                     expandableRows
                     expandableRowsComponent={dataExpan}
                     responsive
                    />
                </div>}
                <button onClick={()=>setNewWat(true)}>New Watch</button>
                {newWat && <Form btnClose={()=>setNewWat(false)}/>}
                {updateW && wUpdate.id && <FormWatchUpdate btnClose={()=>setUpdateW(false)} wUpdate={wUpdate} setUpdateW={setUpdateW}/>}
            </div>
            </div>
        </Container>
    )
}

export default Dashboard;

