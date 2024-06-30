import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import { GlucoseReading } from '../model/glucose-reading';
@Injectable({
  providedIn: 'root'
})
export class GlucoseReadingService {
  private apiUrl = 'http://localhost:8081/api/glucose';
  constructor(private http: HttpClient) { }


  findAll(): Observable<GlucoseReading[]> {
    return this.http.get<GlucoseReading[]>(this.apiUrl).pipe(
      tap(data => console.log('API data:', data))
    );
  }

  save(glucoseReading: GlucoseReading): Observable<GlucoseReading> {
    return this.http.post<GlucoseReading>(this.apiUrl , glucoseReading)
  }

  deleteGlucoseReading(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }


  updateGlucoseReading(id: number, glucoseReading: GlucoseReading): Observable<GlucoseReading> {
    return this.http.put<GlucoseReading>(`${this.apiUrl}/${id}`, glucoseReading)
  }

  getGlucoseReadingById(id:number):Observable<GlucoseReading>{
    return this.http.get<GlucoseReading>(`${this.apiUrl}/${id}`)
  }

}
