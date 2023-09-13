import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeagueStandingsService } from 'src/app/core/league-standings.service';
import { LeagueStandings } from 'src/app/models/league-standing.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-league-standings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './league-standings.component.html',
  styleUrls: ['./league-standings.component.scss'],
})
export class LeagueStandingsComponent implements OnChanges{

  @Input() country?: string;
  public leagueStandings$!: Observable<LeagueStandings>

  constructor(private leagueStandings: LeagueStandingsService) {}

  ngOnChanges(){
    this.leagueStandings$ = this.leagueStandings.getLeagueStandings();
  }


  
  
}
