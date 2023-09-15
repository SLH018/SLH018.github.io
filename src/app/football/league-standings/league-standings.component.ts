import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueStandingsService } from 'src/app/core/league-standings.service';
import { LeaguesService } from 'src/app/core/leagues.service';
import { Standing } from 'src/app/models/league-standing.model';
import { Observable } from 'rxjs';
import { LeagueStandingsTableComponent } from '../league-standings-table/league-standings-table.component';
import { CountryConstant } from 'src/app/constants/country.constant';
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
  public leagueStandings$!: Observable<Standing[]>;

  constructor(private leagueStandings: LeagueStandingsService, private leaguesService: LeaguesService) {}

  ngOnChanges(){
    this.leagueStandings$ = this.leagueStandings.getLeagueStandings(this.country as Country);
    this.leaguesService.getLeagueDetails(this.country as Country).subscribe();
  }


  
  
}
