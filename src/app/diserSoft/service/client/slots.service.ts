import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../../configuration/settings.json';
//import { NewTableEventsDTO } from 'DTO/table-events.dto';
import { SlotsModel } from 'models/components/clients/slots.model';
import { ComboSettingsModel } from 'models/global/comboSettings.model';

@Injectable({
  providedIn: 'root'
})
export class SlotsService {
    api:string = settings_json.General.Api;
    apiVersion:string = settings_json.General.Version;
    api_base:string = settings_json.APIS.ApiBase;
    api_slots:string = settings_json.APIS.ApiSlots;

    constructor(private httpClient: HttpClient) {}

    // public getAllSlots(event:NewTableEventsDTO):Observable<any>{
    //     const params = new HttpParams()
    //     .set('pageNumber', event.page.toString())
    //     .set('pageSize', event.size.toString())
    //     .set('sort', event.sort.toString())
    //     return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_slots}`,{params}).pipe(map((response:any)=>{ 
    //         return response;
    //     }));
    // }

    public getSlotById(id:string):Observable<any>{
        return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_slots}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }

    public createSlot(data:SlotsModel):Observable<any>{
        return this.httpClient.post<SlotsModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_slots}`,data).pipe(map((response:any)=> {
            console.log("Response : ",response);
            return response;
        }));
    }

    public updateSlot(id:string,data:SlotsModel):Observable<any>{
        return this.httpClient.put<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_slots}${id}`,data).pipe(map((response:any)=> {
            return response;
        }));
    }

    public deleteSlot(id:string):Observable<any> {
        return this.httpClient.delete<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_slots}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }

    public getComboSlotsByFloorId(id:string):Observable<any>{
        return this.httpClient.get<ComboSettingsModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_slots}ComboFloor/${id}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }

    public getComboSlotsByZoneId(id:string):Observable<any>{
        return this.httpClient.get<ComboSettingsModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_slots}ComboZone/${id}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }
}
