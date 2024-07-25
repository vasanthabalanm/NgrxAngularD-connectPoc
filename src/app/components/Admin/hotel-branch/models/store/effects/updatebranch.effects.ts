import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UpdateBranchData, UpdateBranchDataError, UpdateBranchDataSuccess } from "../actions/updatebracnh.action";
import { catchError, map, mergeMap } from "rxjs";
import { CommonEndpoint } from "../../../../../../constant/CommonEndpoint";

@Injectable()

export class UpdateHotelBranchEffects {

    constructor(private actions$:Actions,private http:HttpClient){}

    UpdatehotelBranch$ = createEffect(()=>
        this.actions$.pipe(
            ofType(UpdateBranchData),
            mergeMap((data:any)=>this.http.put(`${CommonEndpoint.addBranch}/UpdateBranch`,data.payload).pipe(
                map((data:any)=>UpdateBranchDataSuccess({responseData:data})),
                catchError(async (error:any)=>{return UpdateBranchDataError({error:error})})
            ))
        )
    )
}