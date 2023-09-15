import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { LeagueStandings, Standing } from '../models/league-standing.model';
import { ServicesConstants } from '../constants/services.constant';
import { Country } from '../models/country.model';
import { LeagueCode } from '../constants/country.constant';

@Injectable({
  providedIn: 'root'
})
export class LeagueStandingsService {

  public standings: Standing[] | undefined;
  headers= new HttpHeaders()
  .set('x-apisports-key', ServicesConstants.AppId);

  constructor(private httpClient: HttpClient) {}

   getLeagueStandings(country: Country): Observable<Standing[]> {
     return this.httpClient.get<LeagueStandings>(ServicesConstants.BaseUrl+'standings?league='+LeagueCode[country]+'&season=2023', { 'headers': this.headers }).pipe(
      map((data=> this.standings = data.response[0].league.standings[0])),   
    )
  }
  }


