import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { LeagueStandingsComponent } from '../league-standings/league-standings.component';
import { LeagueStandingsService } from 'src/app/core/league-standings.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonComponent, LeagueStandingsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public listOfCountries: string[] = ['England', 'Spain', 'Germany', 'France', 'Italy'];
  public selectedCountry?: string;

  constructor(private leagueStandings:LeagueStandingsService) {}

  public onSelect(country: string){
    this.selectedCountry = country;
  }
}
