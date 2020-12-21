import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from "rxjs";
import { CalModel } from '../models/CalModel';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get('https://localhost:5001/api/calculate/');
}

  addNumber(cal: CalModel): Observable<CalModel> {
    return this.http.post<CalModel>("https://localhost:5001/api/calculate/", cal, httpOptions);
  }
  

}
