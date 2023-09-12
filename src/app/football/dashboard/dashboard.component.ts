import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  public listOfCountries: string[] = ['England', 'Spain', 'Germany', 'France', 'Italy'];

  public callService(country: string){
    console.log('The button', country, ' was clicked')
  }
}
