import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FileStorage } from '../course-assessment-worksheet/classes/file-storage';
import { Observable } from 'rxjs';
import { UrlService } from './url-service.service';

@Injectable({
  providedIn: 'root'
})
export class FileStorageService {

  constructor(private http: HttpClient, private urlService: UrlService) { }

  public getCurrentClassInfo(id: any): Observable<FileStorage> {
    console.log('Made it to the service');
    return this.http.get<FileStorage>(this.urlService.getFileURL(id));
  };

  public addFileToStorage(fileStorage: FileStorage) {
    console.log(fileStorage);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put<Response>(this.urlService.addFileURL(), JSON.stringify(fileStorage), httpOptions).subscribe(res => console.log(res));
  }
}
