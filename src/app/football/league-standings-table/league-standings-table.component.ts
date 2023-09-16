import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Standing } from 'src/app/models/league-standing.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-league-standings-table',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './league-standings-table.component.html',
  styleUrls: ['./league-standings-table.component.scss'],
})
export class LeagueStandingsTableComponent {
  @Input() public leagueStandings$: Observable<Standing[]> | undefined;


 
}
