import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Box } from './box';

describe('Box', () => {
  let component: Box;
  let fixture: ComponentFixture<Box>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Box],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Box);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Translate English is defined', () => {
    expect(component.translateToEnglish).toBeDefined();
    expect(typeof component.translateToEnglish).toEqual('function');
  });
  it('Translate German is defined', () => {
    expect(component.translateToGerman).toBeDefined();
    expect(typeof component.translateToGerman).toEqual('function');
  });
  it('should call translateToEnglish when English button clicked', () => {
    spyOn(component, 'translateToEnglish');
    const button = fixture.nativeElement.querySelector('#english-button');
    button.click();
    expect(component.translateToEnglish).toHaveBeenCalled();
  });
  it('should call translateToGerman when German button clicked', () => {
    spyOn(component, 'translateToGerman');
    const button = fixture.nativeElement.querySelector('#german-button');
    button.click();
    expect(component.translateToGerman).toHaveBeenCalled();
  });
  it('should update platforms text when German button clicked', () => {
    const button = fixture.nativeElement.querySelector('#german-button');
    button.click();
    fixture.detectChanges();
    const p = fixture.nativeElement.querySelector('#platforms');
    expect(p.textContent).toContain('Plattformen');
  });
});
