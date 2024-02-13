import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../../configuration/settings.json'
// import { NewTableEventsDTO } from 'DTO/table-events.dto';
import { UserTypeModel } from 'models/components/admin/user-types.model';

@Injectable({
    providedIn: 'root'
})
export class UserTypesService{
    api:string = settings_json.General.Api;
    apiVersion:string = settings_json.General.Version;
    api_base:string = settings_json.APIS.ApiBase;
    api_user_types:string = settings_json.APIS.ApiUserType;

    constructor(private httpClient: HttpClient) {}

    // public getAllUserTypes(event:NewTableEventsDTO):Observable<any>{
    //     const params = new HttpParams()
    //     .set('pageNumber', event.page.toString())
    //     .set('pageSize', event.size.toString())
    //     .set('sort', event.sort.toString())
    //     return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_user_types}`,{params}).pipe(map((response:any)=>{ 
    //         return response;
    //     }));
    // }

    public getUserTypeById(id:string):Observable<any>{
        return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_user_types}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }

    public createUserType(data:UserTypeModel):Observable<any>{
        return this.httpClient.post<UserTypeModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_user_types}`,data).pipe(map((response:any)=> {
            console.log("Response : ",response);
            return response;
        }));
    }

    public updateUserType(id:string,data:UserTypeModel):Observable<any>{
        return this.httpClient.put<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_user_types}${id}`,data).pipe(map((response:any)=> {
            return response;
        }));
    }

    public deleteUserType(id:string):Observable<any> {
        return this.httpClient.delete<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_user_types}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }
}