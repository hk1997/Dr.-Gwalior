import {Injectable} from '@angular/core';
import {Http, URLSearchParams, RequestOptions, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class ImformationService
{
  constructor(private http:Http)
  {

  }

  getList()
  {
    let params: URLSearchParams = new URLSearchParams();
    let specialization='flirt';
    params.set('specialization', specialization);

    let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    let options = new RequestOptions({ headers: headers});

    return this.http.get("http://localhost:3000/",headers).map(res => res.json());
  }

  searchList(sp:String)
  {
    return this.http.post("http://localhost:3000/list",{sp:sp}).map(res=>res.json());
  }

  mail(newDoctor)
  {
    return this.http.post("http://localhost:3000/add",newDoctor).map(res=>res.json());

  }

}
