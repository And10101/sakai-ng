import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsuarioRegister } from '../../../../../models/login/usuario-register.model';
import settings_json from '../../configuration/settings.json';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  api:string = settings_json.General.Api;
  apiVersion:string = settings_json.General.Version;
  api_base:string = settings_json.APIS.ApiBase;
  api_register:string = settings_json.APIS.ApiRegister;

  constructor(private httpClient: HttpClient) {}

  public saveUser(data:UsuarioRegister):Observable<any>{
    return this.httpClient.post<any>(`${this.api_base}${this.api}${this.api_register}`, data).pipe(map((response:any)=>{ 
        return response;
    }));
  }
}
