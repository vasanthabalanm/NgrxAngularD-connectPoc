import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetApprovedUser, GetApprovedUserError, GetApprovedUserSuccess } from "../action/approvedUser.action";
import { catchError, map, mergeMap } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class ApprovedUserEffects {

    constructor(private actions$:Actions,private http:HttpClient){}

    GetApprovedUser$ = createEffect(()=>
        this.actions$.pipe(
            ofType(GetApprovedUser),
            mergeMap(()=> this.http.get(`${CommonEndpoint.adminEndpoints}/GetApprovedUser`).pipe(
                map((data:any)=>GetApprovedUserSuccess({getuserData:data})),
                catchError(async (error:any)=>{return GetApprovedUserError({error:error})})
            ))
        )
    )
}