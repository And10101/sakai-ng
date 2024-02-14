import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


  constructor(private router:Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      observe: 'response'
      });
      
    var token = sessionStorage.getItem('token');
    var request = req.clone({headers});

    request = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${token}` )
    });
  
    return next.handle(request).pipe(
      map((res)=>{
      return res;
    }))

  }
}
