import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSecurity } from './data-security';

describe('DataSecurity', () => {
  let component: DataSecurity;
  let fixture: ComponentFixture<DataSecurity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataSecurity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataSecurity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
