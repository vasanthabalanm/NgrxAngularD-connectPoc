import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PostHotel, PostHotelErrorData, PostHotelSuccess } from "./addhotel.action";
import { catchError, map, of, switchMap } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class AddHotelEffects {

    constructor(private action$:Actions,private http:HttpClient){}

    AddHotel$ = createEffect(()=>
        this.action$.pipe(
            ofType(PostHotel),
            switchMap((action)=>
                this.http.post(`${CommonEndpoint.addHotel}/AddHotel`,action.payload).pipe(
                    map((data)=> PostHotelSuccess({getAddedHotelDetails:data})),
                    catchError((error:any)=> of(PostHotelErrorData({error:error.error})))
                )
            )
        )
    );
}