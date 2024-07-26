import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostNewBranch, PostNewBranchErrorData, PostNewBranchSuccessData } from "../actions/addbranch.action";
import { catchError, map, mergeMap, of } from "rxjs";
import { CommonEndpoint } from "../../../../../../constant/CommonEndpoint";

@Injectable()
export class AddBranchEffects{

    constructor(private actions$:Actions,private http:HttpClient){}

    PostNewBranch$ = createEffect(()=>
        this.actions$.pipe(
            ofType(PostNewBranch),
            mergeMap((data:any)=>this.http.post(`${CommonEndpoint.addBranch}/AddBranch`,data.payload).pipe(
                map((data:any)=> PostNewBranchSuccessData({postedData:data})),
                catchError((error:any)=>of(PostNewBranchErrorData({error:error})))
            ))
        )
    );
}