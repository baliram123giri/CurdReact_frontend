import * as types from "../actionTypes/actionTypes"

//create error request
export const errorHandler = (data)=>{
    return{
        type:types.ERROR,
        payload:data
    }
}
//create error request
export const successHandler = (data)=>{
    return{
        type:types.SUCCESS,
        payload:data
    }
}
//create error request
export const loaderHandler = ()=>{
    return{
        type:types.LOADER
    }
}