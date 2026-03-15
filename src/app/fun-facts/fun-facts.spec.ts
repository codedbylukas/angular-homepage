import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { FunFacts } from './fun-facts';

describe('FunFacts', () => {
  let component: FunFacts;
  let fixture: ComponentFixture<FunFacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunFacts],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunFacts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should implement playAudio function', () => {
    expect(component.playAudio).toBeDefined();
    expect(typeof component.playAudio).toEqual('function');
  });
  it('function should be called when buton is clickt', () => {
    spyOn(component, "playAudio");
    const button = fixture.nativeElement.querySelector('#button-click');
    button.click();
    expect(component.playAudio).toHaveBeenCalled();
  });
});
