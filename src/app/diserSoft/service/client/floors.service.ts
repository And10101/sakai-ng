import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../../configuration/settings.json';
//import { NewTableEventsDTO } from 'DTO/table-events.dto';
import { FloorModel,CanvasModel } from 'models/components/clients/floors.model';

@Injectable({
  providedIn: 'root'
})

export class FloorsServices {

    api:string = settings_json.General.Api;
    apiVersion:string = settings_json.General.Version;
    api_base:string = settings_json.APIS.ApiBase;
    api_floors:string = settings_json.APIS.ApiFloor;

    private FloorReal:Subject <FloorModel> = new Subject();

    constructor(private httpClient: HttpClient) {}

    public set floorData (data:any)
    {
        this.FloorReal.next(data)
    }

    public get floorData ():Observable<FloorModel>
    {
        return this.FloorReal.asObservable()
    }

    // public getAllFloors(event:NewTableEventsDTO):Observable<any>{
    //     const params = new HttpParams()
    //     .set('pageNumber', event.page.toString())
    //     .set('pageSize', event.size.toString())
    //     .set('sort', event.sort.toString())
    //     return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_floors}`,{params}).pipe(map((response:any)=>{ 
    //         return response;
    //     }));
    // }

    public getFloorById(id:string):Observable<any>{
        return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_floors}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }

    public createFloor(data:FloorModel):Observable<any>{
        return this.httpClient.post<FloorModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_floors}`,data).pipe(map((response:any)=> {
            console.log("Response : ",response);
            return response;
        }));
    }

    public updateFloor(id:string,data:FloorModel):Observable<any>{
        return this.httpClient.put<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_floors}${id}`,data).pipe(map((response:any)=> {
            return response;
        }));
    }

    public updateFloorSettings(id:string,data:CanvasModel):Observable<any>{
        return this.httpClient.put<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_floors}Settings/${id}`,data).pipe(map((response:any)=> {
            return response;
        }));
    }

    public deleteFloor(id:string):Observable<any> {
        return this.httpClient.delete<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_floors}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }
}
