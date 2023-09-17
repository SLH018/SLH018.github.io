import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueStandingsService } from 'src/app/core/league-standings.service';
import { LeaguesService } from 'src/app/core/leagues.service';
import { Standing } from 'src/app/models/league-standing.model';
import { Observable, concatMap, map } from 'rxjs';
import { LeagueStandingsTableComponent } from '../league-standings-table/league-standings-table.component';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-league-standings',
  standalone: true,
  imports: [CommonModule, LeagueStandingsTableComponent],
  templateUrl: './league-standings.component.html',
  styleUrls: ['./league-standings.component.scss'],
})
export class LeagueStandingsComponent implements OnChanges{

  @Input() country!: string;
  leagueStandings$!: Observable<Standing[]>;
  season!: string | Number;

  constructor(private leagueStandings: LeagueStandingsService, private leaguesService: LeaguesService) {}

  ngOnChanges(){
    this.leagueStandings$ = this.leaguesService.getLeagueDetails(this.country as Country).pipe(
      map(result  => this.getSeason(result)),
      ).pipe(
      concatMap(season => this.leagueStandings.getLeagueStandings(this.country as Country, season)
   ))
      }

  private getSeason(endDate: Date){
    const today = new Date().toISOString().slice(0,10);
    const endDateToCompare = new Date(endDate).toISOString().slice(0,10);
    const result = today > endDateToCompare;

    if (result ){
      this.season = endDateToCompare.slice(0,4);
    } else {
      this.season = Number(endDateToCompare.slice(0,4)) - 1;
    }
    return this.season;
  } 
}
