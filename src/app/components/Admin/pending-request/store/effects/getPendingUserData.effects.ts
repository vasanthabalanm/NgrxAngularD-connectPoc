import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetPendingUserData, GetPendingUserDataError, GetPendingUserDataSuccess } from "../actions/getPendinguserData.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class GetPendingUserDataEffects{
    constructor(private actions$:Actions,private http:HttpClient){}

    GetPendigUser$ = createEffect(()=>
        this.actions$.pipe(
            ofType(GetPendingUserData),
            mergeMap(()=>this.http.get(`${CommonEndpoint.pendingUserEndpoint}/GetPendingUser`).pipe(
                map((data:any)=>GetPendingUserDataSuccess({getResponseUserData:data})),
                catchError((error:any)=>of(GetPendingUserDataError({error:error})))
            ))
        )
    )
}