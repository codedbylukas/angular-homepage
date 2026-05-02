import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Entry } from './entry';

describe('Entry', () => {
  let component: Entry;
  let fixture: ComponentFixture<Entry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Entry],
    }).compileComponents();

    fixture = TestBed.createComponent(Entry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test if del_object is defined right', () => {
    expect(component.del_object).toBeDefined();
    expect(typeof component.del_object).toBe('function');
  });

  it('Defined variable date', () => {
    expect(component.date).toBeDefined();
  });

  it('Defined variable id', () => {
    expect(component.id).toBeDefined();
  });

  it('Defined variable text', () => {
    expect(component.text).toBeDefined();
  });

  it('Defined variable title', () => {
    expect(component.title).toBeDefined();
  });

  it('Id should have the right value(0)', () => {
    expect(component.id).toBe(0);
  });
});
