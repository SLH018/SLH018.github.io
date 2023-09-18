import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Standing } from 'src/app/models/league-standing.model';
import { RouterLink } from '@angular/router';
import { HighlightDirective } from 'src/app/shared/highlight.directive';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@Component({
  selector: 'app-league-standings-table',
  standalone: true,
  imports: [CommonModule, RouterLink, HighlightDirective, MatProgressSpinnerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './league-standings-table.component.html',
  styleUrls: ['./league-standings-table.component.scss'],
})
export class LeagueStandingsTableComponent {
  @Input() leagueStandings$: Observable<Standing[]> | undefined;
  @Input() isLoading = false;
}
