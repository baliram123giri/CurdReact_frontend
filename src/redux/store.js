import Thunk from "redux-thunk"
import { applyMiddleware, createStore } from "redux"
import {logger} from "redux-logger"
import { userReducer } from "./reducers/userReducer"
//create middleware for calling api with async promice
const middleware = [Thunk ]
 if(process.env.NODE_ENV==="development"){
     middleware.push(logger)
 }
export const store = createStore(userReducer, applyMiddleware(...middleware))