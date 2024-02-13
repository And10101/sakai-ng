import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../../configuration/settings.json'
// import { NewTableEventsDTO } from 'DTO/table-events.dto';
import { DeviceTypeModel } from 'models/components/admin/device-type.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceTypeService {

  api:string = settings_json.General.Api;
  apiVersion:string = settings_json.General.Version;
  api_base:string = settings_json.APIS.ApiBase;
  api_device_type:string = settings_json.APIS.ApiDeviceType;

  constructor(private httpClient: HttpClient) {}

//   public getAllDeviceTypes(event:NewTableEventsDTO):Observable<any>{
//       const params = new HttpParams()
//       .set('pageNumber', event.page.toString())
//       .set('pageSize', event.size.toString())
//       .set('sort', event.sort.toString())
//       return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_device_type}`,{params}).pipe(map((response:any)=>{ 
//           return response;
//       }));
//   }

  public getDeviceTypeById(id:string):Observable<any>{
      return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_device_type}${id}`).pipe(map((response:any)=>{ 
          return response;
      }));
  }

  public createDeviceType(data:DeviceTypeModel):Observable<any>{
      return this.httpClient.post<DeviceTypeModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_device_type}`,data).pipe(map((response:any)=> {
          console.log("Response : ",response);
          return response;
      }));
  }

  public updateDeviceType(id:string,data:DeviceTypeModel):Observable<any>{
      return this.httpClient.put<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_device_type}${id}`,data).pipe(map((response:any)=> {
          return response;
      }));
  }

  public deleteDeviceType(id:string):Observable<any> {
      return this.httpClient.delete<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_device_type}${id}`).pipe(map((response:any)=>{ 
          return response;
      }));
  }

}
