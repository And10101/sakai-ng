import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../../configuration/settings.json'
// import { NewTableEventsDTO } from 'DTO/table-events.dto';
import { UserModel, CreateUserModel } from 'models/components/admin/users.model';

@Injectable({
    providedIn: 'root'
})
export class UsersService{
    api:string = settings_json.General.Api;
    apiVersion:string = settings_json.General.Version;
    api_base:string = settings_json.APIS.ApiBase;
    api_users:string = settings_json.APIS.ApiUsers;

    constructor(private httpClient: HttpClient) {}

    // public getAllUsers(event:NewTableEventsDTO):Observable<any>{
    //     const params = new HttpParams()
    //     .set('pageNumber', event.page.toString())
    //     .set('pageSize', event.size.toString())
    //     .set('sort', event.sort.toString())
    //     return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_users}`,{params}).pipe(map((response:any)=>{ 
    //         return response;
    //     }));
    // }

    public getUserById(id:string):Observable<any>{
        return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_users}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }

    public createUser(data:CreateUserModel):Observable<any>{
        return this.httpClient.post<CreateUserModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_users}`,data).pipe(map((response:any)=> {
            console.log("Response : ",response);
            return response;
        }));
    }

    public updateUser(id:string,data:CreateUserModel):Observable<any>{
        return this.httpClient.put<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_users}${id}`,data).pipe(map((response:any)=> {
            return response;
        }));
    }

    public deleteUser(id:string):Observable<any> {
        return this.httpClient.delete<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_users}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }
}