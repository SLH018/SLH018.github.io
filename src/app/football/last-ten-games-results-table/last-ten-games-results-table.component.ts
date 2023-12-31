import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/last-ten-game-results.model';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-last-ten-games-results-table',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './last-ten-games-results-table.component.html',
  styleUrls: ['./last-ten-games-results-table.component.scss'],
})
export class LastTenGamesResultsTableComponent {
  @Input() isLoading = false;
  @Input() lastTenGamesResults$: Observable<Response[]> | undefined;
}
