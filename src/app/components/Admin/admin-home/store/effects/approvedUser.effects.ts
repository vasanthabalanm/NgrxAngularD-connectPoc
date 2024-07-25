import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap } from "rxjs";
import { GetApprovedUserTotalCount, GetTotalApprovedUserCountError, GetTotalApprovedUserCountSuccess } from "../actions/approvedUser.action";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class ApprovedUserEffects {
    constructor(private action$:Actions,private http:HttpClient){}

     // approvedUser
     GetTotalCountsApprovedUser$ = createEffect(()=>
        this.action$.pipe(
            ofType(GetApprovedUserTotalCount),
            mergeMap(()=>this.http.get(`${CommonEndpoint.adminEndpoints}/TotalApprovedUser`).pipe(
                map((data:any)=>GetTotalApprovedUserCountSuccess({getCountsOfApprovedUser:data})),
                catchError(async (error:any)=>{return GetTotalApprovedUserCountError({error:error})})
            ))
        )
    );
}