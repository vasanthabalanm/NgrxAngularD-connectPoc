import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getapprovedUserOrder, getapprovedUserOrderError, getapprovedUserOrderSuccess } from "../actions/getapproveduserOrder.action";
import { catchError, map, mergeMap, of } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class GetApprovedUserOrderEffects{
    constructor(private actions$:Actions,private http:HttpClient){}

    GetapprovedUserOrder$ = createEffect(()=>
        this.actions$.pipe(
            ofType(getapprovedUserOrder),
            mergeMap((action:any)=>{
                const id = action.payload
                return this.http.get(`${CommonEndpoint.userMenu}/UserViewApprovedOrder?id=${id}`).pipe(
                    map((data:any)=>getapprovedUserOrderSuccess({getApprovedSuccessdata:data})),
                    catchError((error:any)=>of(getapprovedUserOrderError({error:error})))
                )
            })
        )
    )
}