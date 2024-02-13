import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../../configuration/settings.json';
// import { NewTableEventsDTO } from 'DTO/table-events.dto';
import { ComboSettingsModel } from 'models/global/comboSettings.model';
import { ZonesModel } from 'models/components/clients/zones.model';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {

  api:string = settings_json.General.Api;
  apiVersion:string = settings_json.General.Version;
  api_base:string = settings_json.APIS.ApiBase;
  api_zones:string = settings_json.APIS.ApiZones;

  constructor(private httpClient: HttpClient) {}

  // public getAllZones(event:NewTableEventsDTO):Observable<any>{
  //   const params = new HttpParams()
  //   .set('pageNumber', event.page.toString())
  //   .set('pageSize', event.size.toString())
  //   .set('sort', event.sort.toString())
  //   return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_zones}`,{params}).pipe(map((response:any)=>{ 
  //       return response;
  //   }));
  // }

  public getZoneById(id:string):Observable<any>{
    return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_zones}${id}`).pipe(map((response:any)=>{ 
        return response;
    }));
  }

  public createZone(data:ZonesModel):Observable<any>{
    return this.httpClient.post<ZonesModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_zones}`,data).pipe(map((response:any)=> {
        console.log("Response : ",response);
        return response;
    }));
  }

  public updateZone(id:string,data:ZonesModel):Observable<any>{
    return this.httpClient.put<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_zones}${id}`,data).pipe(map((response:any)=> {
        return response;
    }));
  }

  public deleteZone(id:string):Observable<any> {
    return this.httpClient.delete<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_zones}${id}`).pipe(map((response:any)=>{ 
        return response;
    }));
  }

  public getComboZonesByFloorId(id:string):Observable<any>{
    return this.httpClient.get<ComboSettingsModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_zones}Combo/${id}`).pipe(map((response:any)=>{ 
        console.log("Response : ",response);
        return response;
    }));
  }
}
