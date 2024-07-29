import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { deletePendingUser, deletePendingUserError, deletPendingUserSuccess } from "../actions/deletePendingUser.actions";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class DeletePendingUserEffects {

    constructor(private actions$:Actions,private http:HttpClient){}

    DeletePendingUser$ = createEffect(()=>
        this.actions$.pipe(
            ofType(deletePendingUser),
            mergeMap((data:any)=>{
                const id = data.payload
                return this.http.delete(`${CommonEndpoint.pendingUserEndpoint}/DeletePendingUser?id=${id}`).pipe(
                    map((data:any)=> deletPendingUserSuccess({getDeleteData:data})),
                    catchError((error:any)=>of(deletePendingUserError({error:error.error.text})))
                )
            })
        )
    )
}