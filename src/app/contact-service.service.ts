import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private apiUrl = 'https://localhost:44337/api/Contact'

  constructor(private http: HttpClient) { }

  getUserDetails(data: any): Observable<any> {
     return this.http.post(`${environment.apiUrl}/Contact`, data, { 
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
    
  }
}
