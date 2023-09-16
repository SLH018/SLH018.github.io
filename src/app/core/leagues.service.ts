import { Injectable } from '@angular/core';
import { ServicesConstants } from '../constants/services.constant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { League, Leagues } from '../models/leagues-model';
import { Observable, flatMap, map, tap } from 'rxjs';
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
  //urlLeagues = 'https://v3.football.api-sports.io/leagues?country=england'
  headers= new HttpHeaders()
  .set('x-apisports-key', ServicesConstants.AppId);

  currentLeagueDetails: LeagueDetails | undefined;
  country!: string;

  constructor(private httpClient: HttpClient) {}

    getLeagueDetails(country: Country ): Observable<any[]> {

    return this.httpClient.get<Leagues>(ServicesConstants.BaseUrl+'leagues?id='+LeagueCode[country]+`&country=${country}`+'&current=true', { 'headers': this.headers }).
    pipe(map(res => res.response.map(a => a.seasons.map(b => b.start))),
    tap(a => console.log(a))
    )
  }  
  }


