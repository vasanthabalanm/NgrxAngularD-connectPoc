import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { GetTotalHotels, GetTotalHotelsError, GetTotalHotelssuccess} from "../actions/counts.action";
import { catchError, map, mergeMap, of, pipe } from "rxjs";
import { CommonEndpoint } from "../../../../../constant/CommonEndpoint";

@Injectable()

export class TotalCountsList {

    constructor(private action$:Actions,private http:HttpClient){}

    // hotel
    GetTotalCountHotels$ = createEffect(()=>
        this.action$.pipe(
            ofType(GetTotalHotels),
            mergeMap(()=>this.http.get(`${CommonEndpoint.addHotel}/TotalHotelCounts`).pipe(
                map((data:any)=>GetTotalHotelssuccess({getCountofHotels:data})),
                catchError((error:any)=> of(GetTotalHotelsError({error:error})))
            ))
        )
    );
}