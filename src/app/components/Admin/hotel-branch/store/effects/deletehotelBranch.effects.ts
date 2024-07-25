import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DeleteHotebranch, DeleteHotelBranchError, DeleteHotelBranchsuccess } from "../action/deletehotelBranch.action";
import { catchError, map, mergeMap } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class DeleteHotelBranchDataEffects {
    constructor(private actions$:Actions,private http:HttpClient){}

    DeleteHoteBracnh$ = createEffect(()=>
        this.actions$.pipe(
            ofType(DeleteHotebranch),
            mergeMap((data:any)=>{
                const {id,hotelId} = data.payload;
               return this.http.delete(`${CommonEndpoint.addBranch}/DeleteBranch?id=${id}&hotelid=${hotelId}`).pipe(
                map((data:any)=>DeleteHotelBranchsuccess({responseData:data})),
                catchError(async (error:any)=>{DeleteHotelBranchError({error:error})})
               )
            }) 
        )
    )
}