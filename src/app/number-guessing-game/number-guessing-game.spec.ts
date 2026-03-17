import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberGuessingGame } from './number-guessing-game';
import { HomeBtn } from '../home-btn/home-btn';
import { ActivatedRoute } from '@angular/router';

describe('NumberGuessingGame', () => {
  let component: NumberGuessingGame;
  let fixture: ComponentFixture<NumberGuessingGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberGuessingGame, HomeBtn],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {} // mock activated route
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NumberGuessingGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
