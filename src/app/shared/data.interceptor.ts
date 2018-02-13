import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse }
  from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { UserService } from '@app/shared/services/user.service';


@Injectable()
export class DataInterceptor implements HttpInterceptor {
    constructor( private inj: Injector){
        
    }
  
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const auth = this.inj.get(UserService);
        request = request.clone({
          setHeaders: {
           Authorization: `Bearer ${auth.getToken()}`
          }
        });
        return next.handle(request);
      }
}