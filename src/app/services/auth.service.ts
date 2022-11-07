import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateSessionDto } from '../models/dto/create-session.dto';
import { DeleteSessionDto } from '../models/dto/delete-session.dto';
import { CreateSessionResponse } from '../models/interfaces/create-session.interface';
import { DeleteSessionResponse } from '../models/interfaces/delete-session.interface';
import { RequestTokenResponse } from '../models/interfaces/request-token.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createRequestToken(): Observable<RequestTokenResponse> {
    return this.http.get<RequestTokenResponse>(
      `${environment.API_BASE}/authentication/token/new?api_key=${environment.API_KEY}`
    );
  }

  createSession(
    sessionDto: CreateSessionDto
  ): Observable<CreateSessionResponse> {
    return this.http.post<CreateSessionResponse>(
      `${environment.API_BASE}/authentication/session/new?api_key=${environment.API_KEY}`,
      sessionDto
    );
  }


  deleteSession(
    deleteSessionDto: DeleteSessionDto
  ): Observable<DeleteSessionResponse> {
    return this.http.request<DeleteSessionResponse>('delete',
      `${environment.API_BASE}/authentication/session?api_key=${environment.API_KEY}`,
      {
        body: deleteSessionDto,
      }
    );
  }
}
