import {NavDiv} from "./styled"
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import timeYouu from "../../../../public/timeYouu.svg"

const Nav =()=>{
    const user = useSelector((state)=> state.user)
    return(
        <NavDiv>
            <Link to="/home" className="linkImg"><img src={timeYouu} alt="" /></Link>
                        
            <h2>Bienvenido {user.userName} </h2>
        </NavDiv>
    )
    }
    
    export default Nav