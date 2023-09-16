import { Injectable } from '@angular/core';
import { ServicesConstants } from '../constants/services.constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { LastTenGameResults, Response } from '../models/last-ten-game-results.model';
import { Fixtures } from '../models/leagues-model';

@Injectable({
  providedIn: 'root'
})
export class LastTenGamesService {

  public fixtures: Fixtures[] | undefined;
  url = ServicesConstants.BaseUrl;
  headers= new HttpHeaders()
  .set('x-apisports-key', ServicesConstants.AppId);


  constructor(private httpClient: HttpClient) {}

   getLastTenFixtures(teamId: number): Observable<Response[]> {
      return this.httpClient.get<LastTenGameResults>(ServicesConstants.BaseUrl+`fixtures?team=${teamId}`+'&last=10&status=FT', { 'headers': this.headers }).pipe(
      map((data=> data.response))
    )
  }
}
