import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { LastTenGamesService } from 'src/app/core/last-ten-games.service';
import { Observable } from 'rxjs';
import { Response } from 'src/app/models/last-ten-game-results.model';
import { LastTenGamesResultsTableComponent } from '../last-ten-games-results-table/last-ten-games-results-table.component';


@Component({
  selector: 'app-last-ten-games-results',
  standalone: true,
  imports: [CommonModule, LastTenGamesResultsTableComponent],
  templateUrl: './last-ten-games-results.component.html',
  styleUrls: ['./last-ten-games-results.component.scss'],
})
export class LastTenGamesResultsComponent implements OnInit{

  lastTenGamesResults$!: Observable<Response[]>;
  teamId!: number;

  constructor(private location: Location, private route: ActivatedRoute, public lastTenGames: LastTenGamesService){}

  ngOnInit() {
    this.teamId = Number(this.route.snapshot.paramMap.get('teamId')); 
    this.lastTenGamesResults$ = this.lastTenGames.getLastTenFixtures(this.teamId);
  }

  goBack(): void{
    this.location.back();
  }
}


