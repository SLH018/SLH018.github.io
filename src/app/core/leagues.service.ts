import { Injectable } from '@angular/core';
import { ServicesConstants } from '../constants/services.constant';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Leagues } from '../models/leagues-model';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { LeagueCode } from '../constants/country.constant';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  headers= new HttpHeaders()
  .set('x-apisports-key', ServicesConstants.AppId);
  
  constructor(private httpClient: HttpClient) {}

  getLeagueDetails(country: Country): Observable<Date> {
    return this.httpClient.get<Leagues>(ServicesConstants.BaseUrl+'leagues?id='+LeagueCode[country]+`&country=${country}`+'&current=true', { 'headers': this.headers }).
    pipe(map(result => result.response[0].seasons[0].end),
    tap(date => console.log(date)),
    catchError((err) => this.handleError(err))
    )
  }  

  private handleError(error: HttpErrorResponse) {
    console.error(`Backend returned code ${error.status}, body was: `, error.error);
    return throwError(() =>
       alert('Something bad happened, please try again later.'))
  }
  }


