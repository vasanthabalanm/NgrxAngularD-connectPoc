import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";
import { AddCartItem, AddCartItemError, AddCartItemSuccess } from "../actions/addcart.actions";

@Injectable()

export class AddCartDataEffects{
    constructor(private actions$:Actions,private http:HttpClient){}

    PostCartItems$ = createEffect(()=>
        this.actions$.pipe(
            ofType(AddCartItem),
            mergeMap((action:any)=>this.http.post(`${CommonEndpoint.pendingOrder}/AddOrder`,action.payload).pipe(
                map((data:any)=>AddCartItemSuccess({responseData:data})),
                catchError((error:any)=>of(AddCartItemError({error:error})))
            ))
        )
    )
}