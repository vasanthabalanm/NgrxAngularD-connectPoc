import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { getpendingUserOrder, getpendingUserOrderError, getpendingUserOrderSuccess } from "../actions/getpendinguserOrder.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class GetPendingOrderUserEffects {
    constructor(private actions$: Actions, private http: HttpClient) { }

    GetPendingOrderUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getpendingUserOrder),
            mergeMap((action: any) => {
                const id = action.payload;
                return this.http.get(`${CommonEndpoint.userMenu}/UserViewPendingOrder?id=${id}`).pipe(
                    map((data: any) => getpendingUserOrderSuccess({ getResponseData: data })),
                    catchError((error: any) => of(getpendingUserOrderError({ error: error })))
                )
            }
            ))
        )
}