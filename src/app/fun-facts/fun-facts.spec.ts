import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunFacts } from './fun-facts';

describe('FunFacts', () => {
  let component: FunFacts;
  let fixture: ComponentFixture<FunFacts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunFacts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunFacts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
