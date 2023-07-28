
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Container} from "./style"
import Form from "../../components/admin/watch/Form";
import Users from "../../components/admin/users/Users"
import Buys from "../../components/admin/buys/Buys";
import Nav from "../../components/admin/nav/Nav";
import Watches from "../../components/admin/watch/Watches"
import { addUsers } from "../../redux/actions/user/addUsers";
//import styled from "styled-components";

const Dashboard = ()=>{
    const allUsers = useSelector((state)=> state.allUsers)
    const allClocks = useSelector((state)=> state.allClocks)
    
    const dispatch = useDispatch()
    
    const dashboarprops = useCallback(()=>{
        dispatch(addUsers())
    },[dispatch])
    
    useEffect(()=>{
        dashboarprops()
    },[dashboarprops])
    
    
    console.log("todos",allUsers);
    return (
        <Container>    
            <Nav/>
            <Buys/>
            <Users allUsers={allUsers}/>
            <Watches Watch={allClocks}/>
            <Form/>
        </Container>
    )
}

export default Dashboard;

