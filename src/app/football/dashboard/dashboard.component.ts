import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { LeagueStandingsComponent } from '../league-standings/league-standings.component';
import { LeagueStandingsService } from 'src/app/core/league-standings.service';
import { LeaguesService } from 'src/app/core/leagues.service';
import { Country } from 'src/app/models/country.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonComponent, LeagueStandingsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public listOfCountries: Country[] = ["England", "Spain", "Germany", "France", "Italy"];
  public selectedCountry?: Country |string;
  title = 'football updates';
  public leagueIds: number[] | undefined;

  constructor(private leagueStandings:LeagueStandingsService, private leagueService: LeaguesService) {}

  public onSelect(country: string){
    this.selectedCountry = country;
  }
}
