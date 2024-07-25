import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetPendingUserTotalCount, GetTotalPendingUserCountError, GetTotalPendingUserCountSuccess } from "../actions/pendinguser.action";
import { catchError, map, mergeMap } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class PendingUserEffects {
    constructor(private action$:Actions,private http:HttpClient){}
    // pendingUser
    GetTotalCountsPendingUser$ = createEffect(()=>
        this.action$.pipe(
            ofType(GetPendingUserTotalCount),
            mergeMap(()=>this.http.get(`${CommonEndpoint.adminEndpoints}/TotalPendingUser`).pipe(
                map((data:any)=>GetTotalPendingUserCountSuccess({getCountsOfPendingUser:data})),
                catchError(async (error:any)=>{return GetTotalPendingUserCountError({error:error})})
            ))
        )
    );
}