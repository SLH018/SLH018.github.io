import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LastTenGamesResultsComponent } from './last-ten-games-results.component';

describe('LastTenGamesResultsComponent', () => {
  let component: LastTenGamesResultsComponent;
  let fixture: ComponentFixture<LastTenGamesResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastTenGamesResultsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LastTenGamesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
