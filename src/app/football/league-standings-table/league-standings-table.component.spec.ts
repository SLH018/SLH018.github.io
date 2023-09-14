import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeagueStandingsTableComponent } from './league-standings-table.component';

describe('LeagueStandingsTableComponent', () => {
  let component: LeagueStandingsTableComponent;
  let fixture: ComponentFixture<LeagueStandingsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueStandingsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LeagueStandingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
