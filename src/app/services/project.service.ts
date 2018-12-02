import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Global} from './global';

@Injectable()
export class ProjectService{
    public url: string;
    constructor(
      private _http: HttpClient
    ){
      this.url=Global.url;
    }

    testService(){
      return 'probando el servicio de angular';
    }
}
