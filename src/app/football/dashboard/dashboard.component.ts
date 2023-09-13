import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';
import { LeagueStandingsComponent } from '../league-standings/league-standings.component';

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

  public onSelect(country: string){
    console.log('The button', country, ' was clicked');
    this.selectedCountry = country;
  }
}
