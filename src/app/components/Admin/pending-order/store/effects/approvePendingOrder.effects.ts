import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ApproveOrder, ApproveOrderError, ApproveOrderSuccess } from "../actions/approvePendingOrder.actions";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class PostApproveDataEffects{
    constructor(private actions$:Actions,private http:HttpClient){}

    ApproveOrderData$ = createEffect(()=>
        this.actions$.pipe(
            ofType(ApproveOrder),
            mergeMap((data:any)=>{
                const {id,role} = data.payload;
               return  this.http.put(`${CommonEndpoint.userMenu}/OrderStatusChange?orderid=${id}&role=${role}`,{}).pipe(
                    map((data:any)=>ApproveOrderSuccess({approvedData:data})),
                    catchError((error:any)=> of(ApproveOrderError({error:error})))
                )
            })
            
        )
    )
}