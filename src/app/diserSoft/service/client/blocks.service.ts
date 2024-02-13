import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../../configuration/settings.json';
//import { NewTableEventsDTO } from 'DTO/table-events.dto';
import { BlockModel, createBlockModel } from 'models/components/clients/blocks.model';

@Injectable({
  providedIn: 'root'
})
export class BlocksService {
    api:string = settings_json.General.Api;
    apiVersion:string = settings_json.General.Version;
    api_base:string = settings_json.APIS.ApiBase;
    api_blocks:string = settings_json.APIS.ApiBlocks;

    constructor(private httpClient: HttpClient) {}

    // public getAllBlocks(event:NewTableEventsDTO):Observable<any>{
    //     const params = new HttpParams()
    //     .set('pageNumber', event.page.toString())
    //     .set('pageSize', event.size.toString())
    //     .set('sort', event.sort.toString())
    //     return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_blocks}`,{params}).pipe(map((response:any)=>{ 
    //         return response;
    //     }));
    // }

    public getBlockById(id:string):Observable<any>{
        return this.httpClient.get<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_blocks}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }

    public createBlock(data:BlockModel):Observable<any>{
        return this.httpClient.post<BlockModel>(`${this.api_base}${this.api}${this.apiVersion}${this.api_blocks}`,data).pipe(map((response:any)=> {
            console.log("Response : ",response);
            return response;
        }));
    }

    public updateBlock(id:string,data:BlockModel):Observable<any>{
        return this.httpClient.put<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_blocks}${id}`,data).pipe(map((response:any)=> {
            return response;
        }));
    }

    public deleteBlock(id:string):Observable<any> {
        return this.httpClient.delete<any>(`${this.api_base}${this.api}${this.apiVersion}${this.api_blocks}${id}`).pipe(map((response:any)=>{ 
            return response;
        }));
    }
}
