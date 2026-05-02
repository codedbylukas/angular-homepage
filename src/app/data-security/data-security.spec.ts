import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { DataSecurityComponent } from './data-security';

describe('DataSecurity', () => {
  let component: DataSecurityComponent;
  let fixture: ComponentFixture<DataSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSecurityComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(DataSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
