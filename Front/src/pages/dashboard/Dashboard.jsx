import {Container} from "./style"
import Form from "../../components/admin/watch/Form";
import Users from "../../components/admin/users/Users"
import Buys from "../../components/admin/buys/Buys";
import Nav from "../../components/admin/nav/Nav";
//import styled from "styled-components";

const Dashboard = ()=>{      
     
    return (
        <Container>    
            <Nav/>
            <Buys/>
            <Users/>
            <Form/>
        </Container>
    )
}

export default Dashboard;

