import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ElementApp} from "../interfaces/element-app";

/**
 * This service is the way for do a rest service API, define new API heare and Inject this service for call it
 */
@Injectable({
  providedIn: 'root'
})
export class RestService {

  private ENDPOINT = 'http://localhost:4000/';

  constructor(private httpClient: HttpClient) { }

  public getElements(): Observable<any> {
    return this.httpClient.get(this.ENDPOINT+'element');
  }

  public saveElement(element: ElementApp): Observable<any> {
    return this.httpClient.post(this.ENDPOINT+'element', element);
  }
}
