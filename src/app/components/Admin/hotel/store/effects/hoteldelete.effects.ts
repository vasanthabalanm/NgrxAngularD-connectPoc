import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DeleteHotel, DeleteHotelErrorData, DeleteHotelSuccessData } from "../actions/hoteldelete.action";
import { catchError, map, mergeMap, of } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class DeleteHotelEffects {
    constructor(private actions$:Actions,private http:HttpClient){}
    DeleteHotel$ = createEffect(() =>
        this.actions$.pipe(
          ofType(DeleteHotel),
          mergeMap(action => {
            const { id, role } = action.payload;
            return this.http.delete(`${CommonEndpoint.addHotel}/DeleteHotelDetails?id=${id}&role=${role}`).pipe(
              map((data: any) => DeleteHotelSuccessData({ deletedhotelDetails: data })),
              catchError((error:any)=> of(DeleteHotelErrorData({error:error})))
            );
          })
        )
    );
}