import { Injectable } from '@angular/core';
import { ServicesConstants } from '../constants/services.constant';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { LastTenGameResults, Response } from '../models/last-ten-game-results.model';

@Injectable({
  providedIn: 'root'
})
export class LastTenGamesService {
  headers= new HttpHeaders()
  .set('x-apisports-key', ServicesConstants.AppId);


  constructor(private httpClient: HttpClient) {}

   getLastTenFixtures(teamId: number): Observable<Response[]> {
      return this.httpClient.get<LastTenGameResults>(ServicesConstants.BaseUrl+`fixtures?team=${teamId}`+'&last=10&status=FT', { 'headers': this.headers }).pipe(
      map((data=> data.response)),
      catchError((err) => this.handleError(err))
    )
  }  

  private handleError(error: HttpErrorResponse) {
    console.error(`Backend returned code ${error.status}, body was: `, error.error);
    return throwError(() =>
       alert('Something bad happened, please try again later.'))
  }   

  }

