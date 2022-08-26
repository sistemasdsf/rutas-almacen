import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HandleRoutesService {

  constructor(
    private http: HttpClient
  ) { }

  public getItems(): Observable<any> {
    return this.http.get<any>(`${environment.hostApi}/select-routes`).pipe(
      map(response => {
        if(response) {
          return response;
        } else {
          throw 'error';
        }
      })
    );;
  }

  public updateItem(item: any): Observable<any> {
    return this.http.post<any>(`${environment.hostApi}/update-route`, item).pipe(
      map(response => {
        if(response) {
          return 'success'
        } else {
          throw 'error';
        }
      })
    );
  }
}
