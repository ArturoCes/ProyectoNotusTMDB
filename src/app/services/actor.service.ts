import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActorsResponse } from '../models/interfaces/actors.interface';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  constructor(public http: HttpClient) { }

  public actorsList(page: number): Observable<ActorsResponse> {
    return this.http.get<ActorsResponse>(
      `${environment.API_BASE}/person/popular?api_key=${environment.API_KEY}&language=en-US&page=${page}`
    );
  }
}


