import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { deleteApprovedUserError, deleteapprovedUserSuccess, deleteapproveUser } from "../action/deleteapprovedUser.action";
import { catchError, map, mergeMap } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class DeleteApprovedUserEffects {
    constructor(private actions$:Actions,private http:HttpClient){}

    DeleteApprovedUser$ = createEffect(()=>
        this.actions$.pipe(
            ofType(deleteapproveUser),
            mergeMap((data:any)=>{
                const id = data.payload;
                return this.http.delete(`${CommonEndpoint.adminEndpoints}/DeleteUserDetails?id=${id}`).pipe(
                    map((data:any)=> deleteapprovedUserSuccess({getapprovedUserdata:data})),
                    catchError(async (error:any)=>deleteApprovedUserError({error:error}))
                )
            })
        )
    )
}