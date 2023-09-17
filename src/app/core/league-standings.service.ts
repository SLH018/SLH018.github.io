import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { LeagueStandings, Standing } from '../models/league-standing.model';
import { ServicesConstants } from '../constants/services.constant';
import { Country } from '../models/country.model';
import { LeagueCode } from '../constants/country.constant';

@Injectable({
  providedIn: 'root'
})
export class LeagueStandingsService {

  headers= new HttpHeaders()
  .set('x-apisports-key', ServicesConstants.AppId);
  standings: Standing[] | undefined;


  constructor(private httpClient: HttpClient) {}

   getLeagueStandings(country: Country, season: string | Number): Observable<Standing[]> {
    return this.httpClient.get<LeagueStandings>(ServicesConstants.BaseUrl+'standings?league='+LeagueCode[country]+`&season=${season}`, { 'headers': this.headers }).pipe(
    map((data=> this.standings = data.response[0].league.standings[0])),
    catchError((err) => this.handleError(err))
    )
  }  

  private handleError(error: HttpErrorResponse) {
    console.error(`Backend returned code ${error.status}, body was: `, error.error);
    return throwError(() =>
       alert('Something bad happened, please try again later.'))
  }   
    
  }
  


