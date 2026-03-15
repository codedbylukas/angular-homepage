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
  
  // Component Created
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // Translation Functions Defined
  it('Translate English is defined', () => {
    expect(component.translateToEnglish).toBeDefined();
    expect(typeof component.translateToEnglish).toEqual('function');
  });
  it('Translate German is defined', () => {
    expect(component.translateToGerman).toBeDefined();
    expect(typeof component.translateToGerman).toEqual('function');
  });
  // Test Button Clicks
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
  // Text Update German Translation
  it('should update headline text when German button clicked', () => {
    const button = fixture.nativeElement.querySelector('#german-button');
    button.click();
    fixture.detectChanges();
    const headline = fixture.nativeElement.querySelector('#headline');
    expect(headline.textContent).toContain('Hallo, ich bin Lukas');
  });
   it('should update project headline text when German button clicked', () => {
    const button = fixture.nativeElement.querySelector('#german-button');
    button.click();
    fixture.detectChanges();
    const projectHeadline = fixture.nativeElement.querySelector('#project_headline');
    expect(projectHeadline.textContent).toContain('Coole Webseiten');
  });
   it('should update sand site link text when German button clicked', () => {
    const button = fixture.nativeElement.querySelector('#german-button');
    button.click();
    fixture.detectChanges();
    const sandSiteLink = fixture.nativeElement.querySelector('#sand-site-link');
    expect(sandSiteLink.textContent).toContain('Sand Spiel');
  });
   it('should update Fun Facts link text when German button clicked', () => {
    const button = fixture.nativeElement.querySelector('#german-button');
    button.click();
    fixture.detectChanges();
    const sandSiteLink = fixture.nativeElement.querySelector('#fun-facts');
    expect(sandSiteLink.textContent).toContain('Lustige Fakten');
  });
  // Text Update English Translation
  it('should update headline text when English button clicked', () => {
    const button = fixture.nativeElement.querySelector('#english-button');
    button.click();
    fixture.detectChanges();
    const headline = fixture.nativeElement.querySelector('#headline');
    expect(headline.textContent).toContain("Hello, I'm Lukas");
  });
  it('should update project headline text when English button clicked', () => {
    const button = fixture.nativeElement.querySelector('#english-button');
    button.click();
    fixture.detectChanges();
    const projectHeadline = fixture.nativeElement.querySelector('#project_headline');
    expect(projectHeadline.textContent).toContain('Cool Websites');
  });
  it('should update Sand Game text when English button clicked', () => {
    const button = fixture.nativeElement.querySelector('#english-button');
    button.click();
    fixture.detectChanges();
    const sandSiteLink = fixture.nativeElement.querySelector('#sand-site-link');
    expect(sandSiteLink.textContent).toContain('Sand Game');
  });
    it('should update Fun Facts text when English button clicked', () => {
    const button = fixture.nativeElement.querySelector('#english-button');
    button.click();
    fixture.detectChanges();
    const sandSiteLink = fixture.nativeElement.querySelector('#fun-facts');
    expect(sandSiteLink.textContent).toContain('Fun Facts');
  });
});
