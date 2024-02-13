import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../../configuration/settings.json';
//import { NewTableEventsDTO } from 'DTO/table-events.dto';
import { ParkingLotsModel } from 'models/components/clients/parking-lots.model';

@Injectable({
  providedIn: 'root'
})
export class ParkingLotsService {

    api:string = settings_json.General.Api;
    apiVersion:string = settings_json.General.Version;
    api_base:string = settings_json.APIS.ApiBase;
    api_parking_lots:string = settings_json.APIS.ApiParkingLots;

    constructor(private httpClient: HttpClient) {}

    // public getAllParkingLots(event:NewTableEventsDTO):Observable<any>{
    //     const params = new HttpParams()
    //     .set('pageNumber', event.page.toString())
    //     .set('pageSize', event.size.toString())
    //     .set('sort', event.sort.toString())
    //     return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_parking_lots}`,{params}).pipe(map((response:any)=>{ 
    //         return response;
    //     }));
    // }

    public getParkingLotById(id:string):Observable<any>{
        return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_parking_lots}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }

    public createParkingLot(data:ParkingLotsModel):Observable<any>{
        return this.httpClient.post<ParkingLotsModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_parking_lots}`,data).pipe(map((response:any)=> {
            console.log("Response : ",response);
            return response;
        }));
    }

    public updateParkingLot(id:string,data:ParkingLotsModel):Observable<any>{
        return this.httpClient.put<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_parking_lots}${id}`,data).pipe(map((response:any)=> {
            return response;
        }));
    }

    public deleteParkingLot(id:string):Observable<any> {
        return this.httpClient.delete<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_parking_lots}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }
}
