import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { LeagueStandings } from '../models/league-standing.model';


@Injectable({
  providedIn: 'root'
})
export class LeagueStandingsService {
  url = 'https://v3.football.api-sports.io//standings?league=39&season=2023';

  headers= new HttpHeaders()
  .set('x-apisports-key', 'a1dc68bed398ad71607d04e73bc81118');

  constructor(private httpClient: HttpClient) {}

  getLeagueStandings(): Observable<LeagueStandings> {
    return this.httpClient.get<LeagueStandings>(this.url, { 'headers': this.headers }).pipe(
      tap(() => {
        console.log(`Executing Http request ${this.url}`)
      })
    )
  }
}
