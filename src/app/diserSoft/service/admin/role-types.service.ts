import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../../configuration/settings.json'
// import { NewTableEventsDTO } from 'DTO/table-events.dto';
import { RoleTypeModel } from 'models/components/admin/role-types.model';

@Injectable({
    providedIn: 'root'
})
export class RoleTypesServices{
    api:string = settings_json.General.Api;
    apiVersion:string = settings_json.General.Version;
    api_base:string = settings_json.APIS.ApiBase;
    api_role_types:string = settings_json.APIS.ApiRolType;

    constructor(private httpClient: HttpClient) {}

    // public getAllRoleTypes(event:NewTableEventsDTO):Observable<any>{
    //     const params = new HttpParams()
    //     .set('pageNumber', event.page.toString())
    //     .set('pageSize', event.size.toString())
    //     .set('sort', event.sort.toString())
    //     return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_role_types}`,{params}).pipe(map((response:any)=>{ 
    //         return response;
    //     }));
    // }

    public getRoleTypeById(id:string):Observable<any>{
        return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_role_types}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }

    public createRoleType(data:RoleTypeModel):Observable<any>{
        return this.httpClient.post<RoleTypeModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_role_types}`,data).pipe(map((response:any)=> {
            console.log("Response : ",response);
            return response;
        }));
    }

    public updateRoleType(id:string,data:RoleTypeModel):Observable<any>{
        return this.httpClient.put<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_role_types}${id}`,data).pipe(map((response:any)=> {
            return response;
        }));
    }

    public deleteRoleType(id:string):Observable<any> {
        return this.httpClient.delete<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_role_types}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }
}