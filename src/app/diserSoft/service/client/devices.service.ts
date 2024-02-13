import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../../configuration/settings.json';
//import { NewTableEventsDTO } from 'DTO/table-events.dto';
import { DeviceModel } from 'models/components/clients/devices.model';
import { ComboSettingsModel } from 'models/global/comboSettings.model';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
    api:string = settings_json.General.Api;
    apiVersion:string = settings_json.General.Version;
    api_base:string = settings_json.APIS.ApiBase;
    api_devices:string = settings_json.APIS.ApiDevice;

    constructor(private httpClient: HttpClient) {}

    // public getAllDevices(event:NewTableEventsDTO):Observable<any>{
    //     const params = new HttpParams()
    //     .set('pageNumber', event.page.toString())
    //     .set('pageSize', event.size.toString())
    //     .set('sort', event.sort.toString())
    //     return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_devices}`,{params}).pipe(map((response:any)=>{ 
    //         return response;
    //     }));
    // }

    public getDeviceById(id:string):Observable<any>{
        return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_devices}id/${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }

    public createDevice(data:DeviceModel):Observable<any>{
        return this.httpClient.post<DeviceModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_devices}`,data).pipe(map((response:any)=> {
            console.log("Response : ",response);
            return response;
        }));
    }

    public updateDevice(id:string,data:DeviceModel):Observable<any>{
        return this.httpClient.put<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_devices}${id}`,data).pipe(map((response:any)=> {
            return response;
        }));
    }

    public deleteDevice(id:string):Observable<any> {
        return this.httpClient.delete<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_devices}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }
    
    public getComboDevicesByDeviceType(id:string):Observable<any>{
        return this.httpClient.get<ComboSettingsModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_devices}ComboType/${id}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }

    public getComboDevicesByZoneId(id:string):Observable<any>{
        return this.httpClient.get<ComboSettingsModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_devices}ComboZone/${id}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }

    public getComboDevicesByZoneIdAndDeviceType(id:string):Observable<any>{
        return this.httpClient.get<ComboSettingsModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_devices}ComboZoneType/${id}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }
}
