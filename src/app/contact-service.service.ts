import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private apiUrl = 'https://localhost:44337/api/Contact'

  constructor(private http: HttpClient) { }

  getUserDetails(data: any): Observable<any> {
     return this.http.post(this.apiUrl, data, { 
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
    
  }
}
