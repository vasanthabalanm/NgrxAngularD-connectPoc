import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { postNewUser, postNewUserDataError, postNewUserSuccess } from "../actions/postnewUser.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class PostNewUserDataEffects {
    constructor(private actions:Actions,private http:HttpClient){}

    PostNewUser$ = createEffect(()=>
        this.actions.pipe(
            ofType(postNewUser),
            mergeMap((data:any)=>this.http.post(`${CommonEndpoint.adminEndpoints}/RegisterUser`,data.payload).pipe(
                map((data:any)=>postNewUserSuccess({getPostUserData:data})),
                catchError((error:any)=>of(postNewUserDataError({error:error})))
            ))
        )
    )
}