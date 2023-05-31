import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

const endpoint = 'https://dummyjson.com/users';
const endpoint2 = 'https://dummyjson.com/posts';
const endpoint3 = 'https://dummyjson.com/products';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public getData() : Observable<any> {
    return this.http.get(endpoint);
  }

  public getPosts() : Observable<any> {
    return this.http.get(endpoint2);
  }

  public getProdcuts() : Observable<any> {
    return this.http.get(endpoint3);
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => 'Something bad happened; please try again later.');
  }
}


