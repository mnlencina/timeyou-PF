
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Container} from "./style"
import Sidebar from "../../components/admin/sidebar/Sidebar";
import Form from "../../components/admin/watch/Form";
import FormUser from "../../components/admin/users/Form";
import Buys from "../../components/admin/buys/Buys";
import Nav from "../../components/admin/nav/Nav";
import { addUsers } from "../../redux/actions/admin/addUsers";
import { addBuys } from "../../redux/actions/admin/addBuys";
import { updateUser } from "../../redux/actions/admin/updateUser";
import { updateWatch } from "../../redux/actions/admin/updateWatch";
import { getProducts } from "../../redux/Actions";
import FormWatchUpdate from "../../components/admin/watch/FormUpdate";
import DataTable from "react-data-table-component"
import { BiTrash,BiDislike } from "react-icons/bi"
import {FaUser,FaUserTie,FaEdit} from "react-icons/fa"
import { TbDeviceWatchOff, TbDeviceWatchStats, TbDeviceWatchUp } from "react-icons/tb";
import HomeAdmin from "../../components/admin/nav/HomeAdmin";


const Dashboard = ()=>{
    const allUsers = useSelector((state)=> state.allUsers)
    const allClocks = useSelector((state)=> state.allClocks)
    const allBuys = useSelector((state)=> state.allBuys)
    
    const [newUser, setNewUser] = useState(false)
    const [newWat, setNewWat] = useState(false)
    const [updateW, setUpdateW] = useState(false)
    const [editRole, setEditRole] = useState(false)
    const [wUpdate, setWUpdate] = useState({})
    const [view, setView] = useState("home");
    const [searchClock, setSearchClock] = useState(allClocks)
    const [searchUser, setSearchUser] = useState(allUsers)
    const dispatch = useDispatch()
    
    
    
    const handleView = (viewName) => {
    setView(viewName);
    };
    
    
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
        setSearchUser(false)
    }
    
    const delWatch = async(id,del)=>{
        let data = await dispatch(updateWatch(id,del))
        console.log(data);
        dispatch(getProducts())
        setSearchClock(false)
        
    }
    
    const handleRole = async(e,id)=>{
        const {value} = e.target
        let data = await dispatch(updateUser(id,{role: value}))
        console.log(data);
        setEditRole(false)        
        dispatch(addUsers())
        setSearchUser(false)
    }
    
    const editWatches =(row)=>{
        setWUpdate(row)
        setUpdateW(true)
        setSearchClock(false)
        
    }
    
    const handleFilterWatch = (e)=>{
        const {value} = e.target
        const filtered = allClocks.filter(row=>{
            const modelo = row.model.toLowerCase()
            return modelo.includes(value.toLowerCase())        
        })
        setSearchClock(filtered)
    }
    
    const handleFilterUser = (e)=>{
        const {value} = e.target
        const filtered = allUsers.filter(row=>{
            const name = row.userName.toLowerCase()
            return name.includes(value.toLowerCase())        
        })
        setSearchUser(filtered)
    }
    
    
    const dataExpan = ({data})=> {
        console.log(data);
        return (
            <div className="dataExpan">
            <span>Descripción: {data.description} </span><span>Funciones: {data.Functions.map(s=>`  •${s.name.charAt(0).toUpperCase() + s.name.slice(1)}  `)}</span>
        </div>
    )
};



const custonStyled = {
    rows: {
        style:{
            color: "black",
            backgroundColor: "rgb(255,255,255,0.7)",
            
        }
    },
    headCells: {
        style:{
                color: "white",
                backgroundColor: "rgb(0,0,0,0.8)",
            }
        },
        /* table:{
            style:{
                backgroundColor: ""
            }
        }, */
        
    }
    
    
    
    const columnsUser = [
        {
            name: "User",
            selector:"role",
            cell: row => 
                row.role === "admin" 
                ? (row.del ? <FaUserTie color="red" className="iconUser"/> : <FaUserTie className="iconUser"/>) 
                : (row.del ? <FaUser className="iconUser" color="red"/> : <FaUser className="iconUser"/>),
            sortable: true
        },
        {
            name: "Nombre",
            selector:"userName",
            cell: row => row.userName.charAt(0).toUpperCase() + row.userName.slice(1),
            sortable: true
        },
        {
            name: "email",
            selector: "email",
            cell: row => row.email,
            sortable: true
        },
        /* {
            name: "Password:",
            selector: row => row.password
        }, */
        {
            name: "Tipo",
            selector: "role",
            cell: row => editRole === row.id?
                <select onChange={(e)=>handleRole(e,row.id)} value={row.role}>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select> 
                : <div className="tableRole">
                    <span>
                        {row.role.charAt(0).toUpperCase() + row.role.slice(1)} 
                    </span>
                    
                    <FaEdit color="blue" size={16} onClick={()=>setEditRole(row.id)}/>
                </div>,
            sortable: true,
            
            
        },
        {
            name: "Registro",
            selector: "provider",
            cell: row => row.provider.charAt(0).toUpperCase() + row.provider.slice(1),
            sortable: true
        },
        {
            name: "Activo",
            selector: "del",
            cell: row => row.del ? (
                <div className="btnDiv" onClick={()=> delUser(row.id,{del: !row.del})}>
                    <div className="Icon1">                    
                        <BiDislike/>
                    </div>
                </div>
                ) : (
                    <div className="btnDiv" onClick={()=> delUser(row.id,{del: !row.del})}>
                        <BiTrash className="Icon2"/>
                    </div>
                    ),
            sortable: true
            
        },
        
    ]
    
    const columnsWatch = [
    {
        name: "Reloj",
        selector: "image",
        cell: row => (<img className="imgTable" src={row.image[0]}/>),
    },
    {
        name: "Marca",
        selector: "brandName",
        cell: row => row.brandName.charAt(0).toUpperCase() + row.brandName.slice(1),
        sortable: true
    },
    {
        name: "Modelo",
        selector: "model",
        cell: row => row.model.charAt(0).toUpperCase() + row.model.slice(1),
        sortable: true
    },
    {
        name: "Precio",
        selector: "price",
        cell: row => `u$s${row.price}`,
        sortable: true
    },
    {
        name: "Color",
        selector: "colorName",
        cell: row => row.colorName.charAt(0).toUpperCase() + row.colorName.slice(1),
        sortable: true
    },
    {
        name: "Estilo",
        selector: "styleName",
        cell: row => row.styleName.charAt(0).toUpperCase() + row.styleName.slice(1),
        sortable: true
    },
    {
        name: "Genero",
        selector: "gender",
        cell: row => row.gender.charAt(0).toUpperCase() + row.gender.slice(1),
        sortable: true
    },
    {
        name: "Malla",
        selector: "strapName",
        cell: row => row.strapName.charAt(0).toUpperCase() + row.strapName.slice(1),
        sortable: true
    },
    {
        name: "Stock",
        selector: "stock",
        cell: row => `Cant.(${row.stock})`,
        sortable: true
    },
    {
        name: "Acción",
        selector: "del",
        cell: row => (
            <div className="divAction">
        {row.del ? (
            <div className="btnDiv" onClick={()=> delWatch(row.id,{del: !row.del})}>
                
                <div className="Icon1">                    
                    <TbDeviceWatchUp title="Agregar"/>
                </div>
            </div>
            ) : (
                <div className="btnDiv" onClick={()=> delWatch(row.id,{del: !row.del})}>
                    <TbDeviceWatchOff title="Borrar" className="Icon2"/>
                </div>
                )}
                <div className="btnDiv">
                <TbDeviceWatchStats title="Edit" className="Icon2" onClick={()=>editWatches(row)} color="rgb(3, 3, 173)"/>
                </div>
            </div>
        ),
        sortable: true
        
    },
    
    ]
    
    return (
        <Container>
            <Nav/>
            <div className="home">
            <Sidebar 
                handleView={handleView} 
                setNewWat={setNewWat}
                view={view}
                newWat={newWat}
                setNewUser={setNewUser}
                newUser={newUser}
                
            />
            
            <div className="containerTable">   
                {view === "home" && 
                    <HomeAdmin
                        allBuys={allBuys}
                        allClocks={allClocks}
                        allUsers={allUsers}
                        setView={setView}
                    />
                }
                {view === "buys" &&
                    <Buys
                        allBuys={allBuys}
                        custonStyled={custonStyled}
                    />
                }
                
                {view === "users" && 
                    <div className="tables">
                    <div className="title">
                        <h3>Lista de Usuarios:</h3>
                        <input id="inUser" type="text" className="inputFilter" placeholder="Busca por Nombre" onChange={handleFilterUser}/>  
                    </div>
                    <DataTable 
                        columns={columnsUser}
                        data={!searchUser.length ? allUsers : searchUser}
                        fixedHeader= {true}
                        fixedHeaderScrollHeight="420px"  
                        highlightOnHover
                        pointerOnHover
                        responsive
                        theme="dark"
                        customStyles={custonStyled}
                    />
                    </div>
                }
                
                {view === "watches" && 
                    <div className="tables"> 
                    <div className="title">
                        <h3>Lista de Relojes:</h3>
                        <input type="text" className="inputFilter" placeholder="Busca por Modelo" onChange={handleFilterWatch}/>  
                    </div>
                        <DataTable
                            columns={columnsWatch}
                            data={!searchClock.length ? allClocks : searchClock}
                            fixedHeader= {true}
                            fixedHeaderScrollHeight="420px"
                            pointerOnHover   
                            highlightOnHover
                            expandableRows
                            expandableRowsComponent={dataExpan}
                            responsive
                            theme="dark"
                            customStyles={custonStyled}                         
                    
                        />
                    </div>
                }
                {newUser && <FormUser btnClose={()=>setNewUser(false)}/>}
                {newWat && <Form btnClose={()=>setNewWat(false)}/>}
                {updateW && wUpdate.id && <FormWatchUpdate btnClose={()=>setUpdateW(false)} wUpdate={wUpdate} setUpdateW={setUpdateW}/>}
            </div>
            </div>
        </Container>
    )
}

export default Dashboard;

