import {CardAdmin,HomeDiv} from "./styled"
import {FaUser, FaDonate} from "react-icons/fa"
import {BsWatch} from "react-icons/bs"

const HomeAdmin =({allBuys,allClocks,allUsers,setView})=>{

    return(
        <HomeDiv>
            <CardAdmin onClick={()=>setView("users")}>
                <FaUser className="iconHome"/>
                <h2>Usuarios</h2>
                <h1>{allUsers?.length}</h1>
            </CardAdmin>
            <CardAdmin onClick={()=>setView("buys")}>
                <FaDonate className="iconHome"/>
                <h2>Ventas</h2>
                <h1>{allBuys?.length}</h1>
            </CardAdmin>
            <CardAdmin onClick={()=>setView("watches")}>
                <BsWatch className="iconHome"/>
                <h2>Relojes</h2>
                <h1>{allClocks?.length}</h1>
            </CardAdmin>
        </HomeDiv>
    )

}

export default HomeAdmin;