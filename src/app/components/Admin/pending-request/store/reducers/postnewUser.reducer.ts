import { createReducer, on } from "@ngrx/store"
import { postNewUser, postNewUserDataError, postNewUserSuccess } from "../actions/postnewUser.actions"

export const intialState : any ={
    reponseData:{
        message:null
    },
    error:null,
    loader:null,
}

export const PostnewUserReducer = createReducer(
    intialState,
    on(postNewUser,(state)=>({error:false,loader:true})),
    on(postNewUserSuccess,(state,{getPostUserData})=>({reponseData:getPostUserData,error:true,loader:false})),
    on(postNewUserDataError,(state,{error})=>({error:error,loader:false}))
)