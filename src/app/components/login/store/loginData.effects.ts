import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from "rxjs/operators";
import { CommonEndpoint } from "../../../constant/CommonEndpoint";
import { GetLoginData, GetLoginFailureData, GetLoginSuccessData } from "./loginData.action";

@Injectable()
export class LoginDataEffects {
    constructor(private action$: Actions, private http: HttpClient) {}

    GetLoginData$ = createEffect(() =>
        this.action$.pipe(
            ofType(GetLoginData),
            switchMap((action) =>
                this.http.post(`${CommonEndpoint.adminEndpoints}/Login`, action.payload).pipe(
                    map((data: any) => GetLoginSuccessData({ getuserdetails: data })),
                    catchError(async (error: any) => {return GetLoginFailureData({error: error.error});})
                )
            )
        )
    );
}
