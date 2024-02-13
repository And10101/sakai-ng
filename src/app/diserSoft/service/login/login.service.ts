import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import settings_json from '../../configuration/settings.json';
import { LoginModel } from '../../../../../models/login/login.model';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})

export class LoginService {
    api:string = settings_json.General.Api;
    apiVersion:string = settings_json.General.Version;
    api_base:string = settings_json.APIS.ApiBase;
    api_login:string = settings_json.APIS.ApiLogin;

    constructor(private httpClient: HttpClient) {}

    public login(data:LoginModel):Observable<any>{
        return this.httpClient.post<any>(`${this.api_base}${this.api}${this.api_login}`, data).pipe(map((response:any)=>{ 
            return response;
        }));
    }

    setSessionStorage(data): void {
        sessionStorage.setItem('token', data);
    }
  
    getSessionStorageToken() {
        return sessionStorage.getItem('token');
    }

    getTokenDecoded(): any {
        const helper = new JwtHelperService();
        const decodedToken = helper.decodeToken(sessionStorage.getItem('token'));
        return decodedToken
       
    }

    removeSessionStorage(): void {
        sessionStorage.removeItem('token');
    }


    removeStorage(): void {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('ROLE');
    }


  // datos(id): Observable<any> {

  //   return this.http.get<Usuario>(this.endpoint + this.ApiDataUsers + id);
  // }
  // LoginWithGoogle(credentials:string): Observable<any> {
  //   return this.http.post(this.endpoint + this.ApiLoginsGoogle, credentials);
  // }

  // RegisterGoogle(credentials:string): Observable<any> {
  //   console.log('credenciales ' + credentials.credencial)
  //   return this.http.post(this.endpoint + this.ApiRegistersGoogle, credentials);
//   }
}
