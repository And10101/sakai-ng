import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../../configuration/settings.json'
// import { NewTableEventsDTO } from 'DTO/table-events.dto';
import { RoleModel } from 'models/components/admin/roles.model';


@Injectable({
    providedIn: 'root'
})
export class RolesServices{
    api:string = settings_json.General.Api;
    apiVersion:string = settings_json.General.Version;
    api_base:string = settings_json.APIS.ApiBase;
    api_roles:string = settings_json.APIS.ApiRoles;

    constructor(private httpClient: HttpClient) {}

    // public getAllRoles(event:NewTableEventsDTO):Observable<any>{
    //     const params = new HttpParams()
    //     .set('pageNumber', event.page.toString())
    //     .set('pageSize', event.size.toString())
    //     .set('sort', event.sort.toString())
    //     return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_roles}`,{params}).pipe(map((response:any)=>{ 
    //         return response;
    //     }));
    // }

    public getRoleById(id:string):Observable<any>{
        return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_roles}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }

    public createRole(data:RoleModel):Observable<any>{
        return this.httpClient.post<RoleModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_roles}`,data).pipe(map((response:any)=> {
            console.log("Response : ",response);
            return response;
        }));
    }

    public updateRole(id:string,data:RoleModel):Observable<any>{
        return this.httpClient.put<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_roles}${id}`,data).pipe(map((response:any)=> {
            return response;
        }));
    }

    public deleteRole(id:string):Observable<any> {
        return this.httpClient.delete<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_roles}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }

}