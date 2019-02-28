import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  public getData(name: string): Observable<any> {
    return this.http.get('./assets/data/' + name + '.json');
  }
}
