import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetBranchTotalCount, GetTotalBranchCountError, GetTotalBranchCountSuccess } from "../actions/branchCounts.action";
import { catchError, map, mergeMap, of } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class BrachTotalCountsEffects{
    
    constructor(private action$:Actions,private http:HttpClient){}
    // branch
    GetTotalCountBranch$ = createEffect(()=>
        this.action$.pipe(
            ofType(GetBranchTotalCount),
            mergeMap(()=>this.http.get(`${CommonEndpoint.addBranch}/TotalBranchCounts`).pipe(
                map((data:any)=>GetTotalBranchCountSuccess({getCountsOfBranch:data})),
                catchError((error:any)=> of(GetTotalBranchCountError({error:error})))
            ))
        )
    );
}