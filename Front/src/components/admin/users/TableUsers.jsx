/* eslint-disable react/prop-types */
import DataTable from "react-data-table-component"
import { BiTrash,BiDislike } from "react-icons/bi"
import {FaUser,FaUserTie} from "react-icons/fa"

const TableUsers = ({allUsers,delUser,handleRole,setEditRole,editRole})=>{
    
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
            name: "Nombre:",
            selector:"userName",
            cell: row => row.userName,
            sortable: true
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
    
    return(
        <div className="tableUser">
            <DataTable 
                columns={columnsUser}
                data={allUsers}
                fixedHeader= {true}
                fixedHeaderScrollHeight="450px"  
                highlightOnHover
                pointerOnHover
                responsive
            />
        </div>
    )
}

export default TableUsers;