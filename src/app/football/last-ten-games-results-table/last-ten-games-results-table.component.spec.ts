import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LastTenGamesResultsTableComponent } from './last-ten-games-results-table.component';

describe('LastTenGamesResultsTableComponent', () => {
  let component: LastTenGamesResultsTableComponent;
  let fixture: ComponentFixture<LastTenGamesResultsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastTenGamesResultsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LastTenGamesResultsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
