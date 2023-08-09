import { UPDATE_USERNAME } from "../../actionTypes";


export const updateUserName =(newUserName)=>({
    type: UPDATE_USERNAME,
    payload: newUserName
})
     
