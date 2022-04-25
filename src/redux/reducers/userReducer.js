import * as types from "../actionTypes/actionTypes"

const initialState = {
    loader:false,
    users:[],
    user:{},
    error:"",
    success:""
}

export const userReducer = (state=initialState, action)=>{
    switch(action.type){
        
        case types.LOADER :
            return{
                ...state,
                loader:true,
                success:"",
                error:""
            }
        case types.SUCCESS :
            return{
                ...state,
                loader:false,
                success:action.payload
            }
        case types.ERROR :
            return{
                ...state,
                loader:false,
                error:action.payload
            }
        case types.GET_USERS :
            return{
                ...state,
                loader:false,
                users:action.payload
            }
        case types.GET_USER :
            return{
                ...state,
                loader:false,
                user:action.payload
            }

        default:
            return state
    }
}
