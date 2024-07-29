import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getMenuData, getMenuDataError, getMenuDataSuccess } from "../actions/getMenuData.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class GetmenuDataEffects{
    constructor(private actions$:Actions,private http:HttpClient){}

    GetMenuData$ = createEffect(()=>
        this.actions$.pipe(
            ofType(getMenuData),
            mergeMap(()=>this.http.get(`${CommonEndpoint.userMenu}/UserViewMenu`).pipe(
                map((data:any)=>getMenuDataSuccess({getMenuData:data})),
                catchError((error:any)=>of(getMenuDataError({error:error})))
            ))
        )
    )
}