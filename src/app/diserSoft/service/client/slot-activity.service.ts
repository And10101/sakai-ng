import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../../configuration/settings.json';
// import { NewTableEventsDTO } from 'DTO/table-events.dto';
import { SlotActivityModel } from 'models/components/clients/slot-activity.model';

@Injectable({
  providedIn: 'root'
})
export class SlotActivityService {

  api:string = settings_json.General.Api;
  apiVersion:string = settings_json.General.Version;
  api_base:string = settings_json.APIS.ApiBase;
  api_slots_activity:string = settings_json.APIS.ApiSlotsActivity;

  constructor(private httpClient: HttpClient) {}

//   public getAllSlotsActivity(event:NewTableEventsDTO):Observable<any>{
//       const params = new HttpParams()
//       .set('pageNumber', event.page.toString())
//       .set('pageSize', event.size.toString())
//       .set('sort', event.sort.toString())
//       return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_slots_activity}`,{params}).pipe(map((response:any)=>{ 
//           return response;
//       }));
//   }

  public getSlotActivityById(id:string):Observable<any>{
      return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_slots_activity}${id}`).pipe(map((response:any)=>{ 
          return response;
      }));
  }

  public deleteSlotActivity(id:string):Observable<any> {
      return this.httpClient.delete<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_slots_activity}${id}`).pipe(map((response:any)=>{ 
          return response;
      }));
  }
}
