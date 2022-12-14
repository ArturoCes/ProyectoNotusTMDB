import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDetailsResponse } from '../models/interfaces/user-details.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

    getProfileInfo():Observable<UserDetailsResponse> {
      return this.http.get<UserDetailsResponse>(
        `${environment.apiBaseUrl}/account?api_key=${environment.apiKey}&session_id=${localStorage.getItem('session_id')}`
      )
    }
  }
