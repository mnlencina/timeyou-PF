
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Container} from "./style"
import Sidebar from "../../components/admin/sidebar/Sidebar";
import Form from "../../components/admin/watch/Form";
import Buys from "../../components/admin/buys/Buys";
import Nav from "../../components/admin/nav/Nav";
import { addUsers } from "../../redux/actions/admin/addUsers";
import { addBuys } from "../../redux/actions/admin/addBuys";
import { updateUser } from "../../redux/actions/admin/updateUser";
import { updateWatch } from "../../redux/actions/admin/updateWatch";
import { getProducts } from "../../redux/Actions";
import FormWatchUpdate from "../../components/admin/watch/FormUpdate";
import TableWatch from "../../components/admin/watch/TableWatch";
import TableUsers from "../../components/admin/users/TableUsers";

//import styled from "styled-components";

const Dashboard = ()=>{
    const allUsers = useSelector((state)=> state.allUsers)
    const allClocks = useSelector((state)=> state.allClocks)
    //const allBuys = useSelector((state)=> state.allBuys)

    const [newWat, setNewWat] = useState(false)
    const [updateW, setUpdateW] = useState(false)
    const [editRole, setEditRole] = useState(false)
    const [wUpdate, setWUpdate] = useState({})
    const [view, setView] = useState("watches");
    
    
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
    
    const handleRole = async(e,id)=>{
        const {value} = e.target
        let data = await dispatch(updateUser(id,{role: value}))
        console.log(data);
        setEditRole(false)        
        dispatch(addUsers())
    }
    
    const editWatches =(row)=>{
        setWUpdate(row)
        setUpdateW(true)        
    }
    
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
   
    
    
    
    
    
    return (
        <Container>
            <Nav/>
            <div className="home">
            <Sidebar 
                handleView={handleView} 
                setNewWat={setNewWat}
                view={view}
                newWat={newWat}
            />
            
            <div className="containerTable">                
                {view === "buys" &&<Buys/>}
                
                {view === "users" && 
                    <TableUsers
                        allUsers={allUsers}
                        delUser={delUser}
                        handleRole={handleRole}
                        editRole={editRole}
                        setEditRole={setEditRole}
                        custonStyled={custonStyled}
                    />
                }
                
                {view === "watches" && 
                    <TableWatch 
                        allClocks={allClocks} 
                        delWatch={delWatch}
                        editWatches={editWatches}
                        custonStyled={custonStyled}
                    />
                }
                
                {newWat && <Form btnClose={()=>setNewWat(false)}/>}
                {updateW && wUpdate.id && <FormWatchUpdate btnClose={()=>setUpdateW(false)} wUpdate={wUpdate} setUpdateW={setUpdateW}/>}
            </div>
            </div>
        </Container>
    )
}

export default Dashboard;

