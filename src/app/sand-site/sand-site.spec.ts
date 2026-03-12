import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandSite } from './sand-site';

describe('SandSite', () => {
  let component: SandSite;
  let fixture: ComponentFixture<SandSite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SandSite],
    }).compileComponents();

    fixture = TestBed.createComponent(SandSite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a fireConfetti method', () => {
    expect(component.fireConfetti).toBeDefined();
    expect(typeof component.fireConfetti).toEqual('function');
  });
});
