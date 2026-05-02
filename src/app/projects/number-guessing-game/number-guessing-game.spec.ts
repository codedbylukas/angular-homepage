import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumberGuessingGame } from './number-guessing-game';
import { HomeBtn } from '../../home-btn/home-btn';
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
          useValue: {}, // mock activated route
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NumberGuessingGame);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should define check guess', () => {
    expect(component.checkGuess).toBeDefined();
    expect(typeof component.checkGuess).toBe('function');
  });
  it('should define resetGame', () => {
    expect(component.resetGame).toBeDefined();
    expect(typeof component.resetGame).toBe('function');
  });
  it('should define Variables', () => {
    expect(component.guess).toBeDefined();
    expect(component.randomNumber).toBeDefined();
    expect(component.message).toBeDefined();
    expect(component.attempts).toBeDefined();
    expect(component.gameWon).toBeDefined();
  });
  it('should define Variables types', () => {
    expect(typeof component.randomNumber).toBe('number');
    expect(typeof component.message).toBe('string');
    expect(typeof component.attempts).toBe('number');
    expect(typeof component.gameWon).toBe('boolean');
  });
  it('should define Variables values', () => {
    expect(component.guess).toBeNull();
    expect(component.randomNumber).toBeGreaterThanOrEqual(1);
    expect(component.randomNumber).toBeLessThanOrEqual(100);
    expect(component.message).toBe('');
    expect(component.attempts).toBe(0);
    expect(component.gameWon).toBe(false);
  });
});
