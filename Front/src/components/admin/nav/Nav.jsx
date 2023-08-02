import {NavDiv} from "./styled"
import { Link, useNavigate } from "react-router-dom";
import timeYouu from "../../../../public/timeYouu.svg"

const Nav =()=>{
    return(
        <NavDiv>
            <Link to="/home" ><img src={timeYouu} alt="" /></Link>
                        
            <input type="text" name="SEARCH"/>
        </NavDiv>
    )
    }
    
    export default Nav