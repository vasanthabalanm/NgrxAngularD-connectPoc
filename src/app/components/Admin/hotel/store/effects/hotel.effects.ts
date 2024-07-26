import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetAllHotel, GetAllHotelErrorData, GetAllHotelSuccessData, UpdateHotel, UpdateHotelErrorData, UpdateHotelSuccessData } from "../actions/hotel.actions";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";
import { async, catchError, concatMap, map, mergeMap, of, switchMap } from "rxjs";

@Injectable()

export class GetAllHotelDetailEffects {

    constructor(private action$:Actions,private http:HttpClient){}

    GetAllHotel$ = createEffect( ()=>
       this.action$.pipe(
            ofType(GetAllHotel),
            mergeMap(()=>this.http.get(`${CommonEndpoint.addHotel}/ViewHotel`).pipe(
                map((data:any)=> GetAllHotelSuccessData({getallhotelDetails:data})),
                catchError((error:any)=>of(GetAllHotelErrorData({error:error.error})))
                )
            )
       )
    );

    UpdateHotel$ = createEffect( ()=>
        this.action$.pipe(
            ofType(UpdateHotel),
            mergeMap((data)=>this.http.put(`${CommonEndpoint.addHotel}/HotelUpdate`,data.payload).pipe(
                map((data:any) => UpdateHotelSuccessData({getupdatedhotelDetails:data})),
                catchError(async(error:any)=> {return UpdateHotelErrorData({error:error})})
            ))
        )
    );
}

