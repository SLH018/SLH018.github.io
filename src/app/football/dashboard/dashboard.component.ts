import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { LeagueStandingsComponent } from '../league-standings/league-standings.component';
import { LeagueStandingsService } from 'src/app/core/league-standings.service';
import { LeaguesService } from 'src/app/core/leagues.service';
import { Country } from 'src/app/models/country.model';
import { LocalStorageService } from 'src/app/shared/local-storage.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonComponent, LeagueStandingsComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit{
  public listOfCountries: Country[] = ["England", "Spain", "Germany", "France", "Italy"];
  public selectedCountry?: Country |string;
  title = 'football updates';
  public leagueIds: number[] | undefined;

  constructor(
    private leagueStandings:LeagueStandingsService, 
    private leagueService: LeaguesService,
    private localStorageService: LocalStorageService) {}

  ngOnInit(){
    const storedSelectedCountry = this.localStorageService.getItem('selectedCountry');
    if(storedSelectedCountry){
      this.selectedCountry = storedSelectedCountry;
    }
  }

  public onSelect(country: string){
    this.selectedCountry = country;
    this.localStorageService.setItem('selectedCountry',this.selectedCountry);
  }
}
