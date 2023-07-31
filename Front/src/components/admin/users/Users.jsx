
const Users =({allUsers})=>{
    console.log(allUsers);
    
    return(
        <div>
            <h1>ALL USERS</h1>
            {allUsers?.map((user, i)=>
            <div key={i+20}>
                <span>{user.userName}- -</span>
                <span>{user.email}- -</span>
                
                <span>{user.role}- -</span>
                <span>{user.provider}</span>
            </div>
            )}
        </div>
    )
    }
    
    export default Users