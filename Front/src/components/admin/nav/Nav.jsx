import {NavDiv} from "./styled"
import timeYouu from "../../../../public/timeYouu.svg"

const Nav =()=>{
    return(
        <NavDiv>
            <img src={timeYouu} alt="" />            
            <input type="text" name="SEARCH"/>
        </NavDiv>
    )
    }
    
    export default Nav