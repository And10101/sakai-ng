import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../../configuration/settings.json'
// import { NewTableEventsDTO } from 'DTO/table-events.dto';
import { UserRoleModel } from 'models/components/admin/user-roles.model';


@Injectable({
    providedIn: 'root'
})
export class UserRolesServices{
    api:string = settings_json.General.Api;
    apiVersion:string = settings_json.General.Version;
    api_base:string = settings_json.APIS.ApiBase;
    api_user_roles:string = settings_json.APIS.ApiUsersRoles;

    constructor(private httpClient: HttpClient) {}

    // public getAllUserRoles(event:NewTableEventsDTO):Observable<any>{
    //     const params = new HttpParams()
    //     .set('pageNumber', event.page.toString())
    //     .set('pageSize', event.size.toString())
    //     .set('sort', event.sort.toString())
    //     return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_user_roles}`,{params}).pipe(map((response:any)=>{ 
    //         return response;
    //     }));
    // }

    public getUserRoleById(id:string):Observable<any>{
        return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_user_roles}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }

    public createUserRole(data:UserRoleModel):Observable<any>{
        return this.httpClient.post<UserRoleModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_user_roles}`,data).pipe(map((response:any)=> {
            console.log("Response : ",response);
            return response;
        }));
    }

    public updateUserRole(id:string,data:UserRoleModel):Observable<any>{
        return this.httpClient.put<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_user_roles}${id}`,data).pipe(map((response:any)=> {
            return response;
        }));
    }

    public deleteUserRoles(id:string):Observable<any> {
        return this.httpClient.delete<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_user_roles}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }
}