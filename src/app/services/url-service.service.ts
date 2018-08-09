import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  baseUrl: String;

  constructor() {
    this.baseUrl = "http://localhost:8080";
  }

  public getClassListURL(): String {
    return this.baseUrl + '/getClassList';
  }
}
