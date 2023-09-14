import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, of, map } from 'rxjs';
import { LeagueStandings, Standing } from '../models/league-standing.model';

@Injectable({
  providedIn: 'root'
})
export class LeagueStandingsService {

  public standings: Standing[] | undefined;
  url = 'https://v3.football.api-sports.io//standings?league=39&season=2023';
  headers= new HttpHeaders()
  .set('x-apisports-key', 'a1dc68bed398ad71607d04e73bc81118');

  constructor(private httpClient: HttpClient) {}

  getLeagueStandings(): Observable<Standing[]> {
    return this.httpClient.get<LeagueStandings>(this.url, { 'headers': this.headers }).pipe(
      map((data=> this.standings = data.response[0].league.standings[0])),
      tap(() => {
        console.log(`Executing Http request ${this.url}`)
      })
    )
  }
}
