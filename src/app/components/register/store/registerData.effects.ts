import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RegisterUser, RegisterUserFailure, RegisterUserSucess } from "./registerData.action";
import { catchError, map, of, switchMap } from "rxjs";
import { CommonEndpoint } from "../../../constant/CommonEndpoint";

@Injectable()

export class RegisterUserEffects{
   constructor(private action$:Actions,private http:HttpClient){}
   
   ResponseRegisterData$ = createEffect( ()=> 
        this.action$.pipe( 
            ofType(RegisterUser),
            switchMap((action)=>
                this.http.post(`${CommonEndpoint.pendingUserEndpoint}/AddUser`, action.payload).pipe(
                    map((data:any)=>RegisterUserSucess({getRegisteredData:data})),
                    catchError((errors:any)=> of(RegisterUserFailure({error:errors})))
                )
            )
        )
    )
}