import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../../configuration/settings.json'
import { NewTableEventsDTO } from 'DTO/table-events.dto';
import { CompaniesModel } from 'models/components/admin/companies.model';

@Injectable({
    providedIn: 'root'
})
export class CompaniesService{
    api:string = settings_json.General.Api;
    apiVersion:string = settings_json.General.Version;
    api_base:string = settings_json.APIS.ApiBase;
    api_companies:string = settings_json.APIS.ApiCompanies;

    constructor(private httpClient: HttpClient) {}

    public getAllCompanies(event:NewTableEventsDTO):Observable<any>{
        const params = new HttpParams()
        .set('pageNumber', event.page.toString())
        .set('pageSize', event.size.toString())
        .set('sort', event.sort.toString())
        return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_companies}`,{params}).pipe(map((response:any)=>{ 
            return response;
        }));
    }

    public getCompanyById(id:string):Observable<any>{
        return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_companies}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }

    public createCompany(data:CompaniesModel):Observable<any>{
        return this.httpClient.post<CompaniesModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_companies}`,data).pipe(map((response:any)=> {
            console.log("Response : ",response);
            return response;
        }));
    }

    public updateCompany(id:string,data:CompaniesModel):Observable<any>{
        return this.httpClient.put<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_companies}${id}`,data).pipe(map((response:any)=> {
            return response;
        }));
    }

    public deleteCompany(id:string):Observable<any> {
        return this.httpClient.delete<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_companies}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }
}