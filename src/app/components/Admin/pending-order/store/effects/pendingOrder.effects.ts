import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetPendingOrder, GetPendingOrderError, GetPendingOrderSuccess } from "../actions/pendingOrder.action";
import { catchError, map, mergeMap, of } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class GetPendingOrderEffects{
    constructor(private actions$:Actions,private http:HttpClient){}

    GetPendingOrderDetails$ = createEffect(()=>
        this.actions$.pipe(
            ofType(GetPendingOrder),
            mergeMap(()=>this.http.get(`${CommonEndpoint.userMenu}/ViewOrders`).pipe(
                map((data:any)=>GetPendingOrderSuccess({getOrderdata:data})),
                catchError((error:any)=>of (GetPendingOrderError({error:error})))
            ))
        )
    );
}