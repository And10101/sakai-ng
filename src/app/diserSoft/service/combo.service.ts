import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../configuration/settings.json';
import { ComboModel } from 'models/global/combo.model';
import { path } from 'models/components/clients/floors.model';

@Injectable({
  providedIn: 'root'
})
export class ComboService {
    api:string = settings_json.General.Api;
    apiVersion:string = settings_json.General.Version;
    api_base:string = settings_json.APIS.ApiBase;
    api_combo_block:string = settings_json.APIS.ApiComboBlock;
    api_combo_floor:string = settings_json.APIS.ApiComboFloor;
    api_combo_parkingLot:string = settings_json.APIS.ApiComboParkingLot;
    api_combo_slot:string = settings_json.APIS.ApiComboSlots;
    api_combo_device:string = settings_json.APIS.ApiComboDevices;
    api_combo_zone:string = settings_json.APIS.ApiComboZones;
    api_combo_companies:string = settings_json.APIS.ApiComboTenants;
    api_combo_roles:string = settings_json.APIS.ApiComboRoles;
    api_combo_role_types:string = settings_json.APIS.ApiComboRoleTypes;
    api_combo_user_types:string = settings_json.APIS.ApiComboUserTypes;
    api_combo_device_types:string = settings_json.APIS.ApiComboDeviceTypes;
    api_cloud:string = settings_json.APIS.ApiCloudStorage;

    constructor(private httpClient: HttpClient) {}

    public getImgUrl(data:path):Observable<any>{
        return this.httpClient.post<path>(`${this.api_base}${this.api}${this.apiVersion}${this.api_cloud}GetByPath`,data).pipe(map((response:any)=> {
            //console.log("Response : ",response);
            return response;
        }));
    }

    public getComboBlocks():Observable<any>{
        return this.httpClient.get<ComboModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_combo_block}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }

    public getComboBlockByParkingLot(id:string):Observable<any>{
        return this.httpClient.get<ComboModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_combo_block}${id}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }
    
    public getComboFloors():Observable<any>{
        return this.httpClient.get<ComboModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_combo_floor}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }

    public getComboFloorByBlock(id:string):Observable<any>{
        return this.httpClient.get<ComboModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_combo_floor}${id}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }

    public getComboParkingLots():Observable<any>{
        return this.httpClient.get<ComboModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_combo_parkingLot}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }

    public getComboSlotsByFloorId(id:string):Observable<any>{
        return this.httpClient.get<ComboModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_combo_slot}${id}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }

    public getComboSlots():Observable<any>{
        return this.httpClient.get<ComboModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_combo_slot}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }

    public getComboDevices():Observable<any>{
        return this.httpClient.get<ComboModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_combo_device}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }

    public getComboCompanies():Observable<any>{
        return this.httpClient.get<ComboModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_combo_companies}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }

    public getComboRoles():Observable<any>{
        return this.httpClient.get<ComboModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_combo_roles}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }

    public getComboRoleTypes():Observable<any>{
        return this.httpClient.get<ComboModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_combo_role_types}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }

    public getComboUserTypes():Observable<any>{
        return this.httpClient.get<ComboModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_combo_user_types}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }

    public getComboDeviceTypes():Observable<any>{
        return this.httpClient.get<ComboModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_combo_device_types}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }

    public getComboZones():Observable<any>{
        return this.httpClient.get<ComboModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_combo_zone}`).pipe(map((response:any)=>{ 
            console.log("Response : ",response);
            return response;
        }));
    }
}
