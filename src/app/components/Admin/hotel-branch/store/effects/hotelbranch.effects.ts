import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { GetBranchData, GetBranchDataError, GetBranchDataSuccess } from "../action/hotelbranch.action";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class HotelBranchEffects {
    constructor(private actions$:Actions,private http:HttpClient){}

    GetHotelBranchData$ = createEffect(()=>
        this.actions$.pipe(
            ofType(GetBranchData),
            mergeMap(()=>this.http.get(`${CommonEndpoint.addBranch}/DisplayBranch`).pipe(
                map((data:any)=>GetBranchDataSuccess({branchdata:data})),
                catchError((error:any)=> of(GetBranchDataError({error:error})))
            ))
        )
    )
}