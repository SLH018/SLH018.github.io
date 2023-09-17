import { Injectable } from '@angular/core';
import { ServicesConstants } from '../constants/services.constant';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { League, Leagues } from '../models/leagues-model';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { LeagueDetails } from '../models/league-details.model';
import { LeagueCode } from '../constants/country.constant';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {
  id: number | undefined;
  league: League | undefined;
  url = ServicesConstants.BaseUrl;
  headers= new HttpHeaders()
  .set('x-apisports-key', ServicesConstants.AppId);

  currentLeagueDetails: LeagueDetails | undefined;
  country!: string;

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


