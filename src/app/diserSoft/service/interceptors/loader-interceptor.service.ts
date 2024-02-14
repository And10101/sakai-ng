import { Injectable } from '@angular/core';
import { LoaderService } from '../utils/loader.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoaderInterceptorService {
  constructor(private loaderService: LoaderService) {}
    intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.showLoader();
        return next.handle(req).pipe(finalize(() => this.loaderService.hideLoader()));
    }
}
