import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberGuessingGame } from './number-guessing-game';

describe('NumberGuessingGame', () => {
  let component: NumberGuessingGame;
  let fixture: ComponentFixture<NumberGuessingGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumberGuessingGame]
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
