import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Diary } from './diary';
import { provideRouter } from '@angular/router';

describe('Diary', () => {
  let component: Diary;
  let fixture: ComponentFixture<Diary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diary],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Diary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should load diaries on init', () => {
    spyOn(component, 'loadDiaries');
    component.ngOnInit();
    expect(component.loadDiaries).toHaveBeenCalled();
  });
  it('should create get_date function', () => {
    expect(component.get_date).toBeDefined();
    expect(typeof component.get_date).toBe('function');
  });
  it('should create loadDiaries function', () => {
    expect(component.loadDiaries).toBeDefined();
    expect(typeof component.loadDiaries).toBe('function');
  });
  it('should create addDiary function', () => {
    expect(component.addDiary).toBeDefined();
    expect(typeof component.addDiary).toBe('function');
  });
  it('should create del_all_items_diary function', () => {
    expect(component.del_all_items_diary).toBeDefined();
    expect(typeof component.del_all_items_diary).toBe('function');
  });
  //
  it('should create updateGUI function', () => {
    expect(component.updateGUI).toBeDefined();
    expect(typeof component.updateGUI).toBe('function');
  });
  it('should return current date in correct format', () => {
    const date = component.get_date();
    const regex = /^\d{2}\.\d{2}\.\d{4}$/;
    expect(regex.test(date)).toBeTrue();
  });
  it('should add a diary entry', () => {
    spyOn(window, 'prompt').and.returnValues('Test Title', 'Test Content');
    const initialId = Number(localStorage.getItem('diary_id') || '0');
    component.addDiary();
    const newId = Number(localStorage.getItem('diary_id') || '0');
    expect(newId).toBe(initialId + 1);
    const storedEntry = localStorage.getItem('diary' + initialId);
    expect(storedEntry).toBeTruthy();
    const entry = JSON.parse(storedEntry!);
    expect(entry.title).toBe('Test Title');
    expect(entry.content).toBe('Test Content');
  });
  it('should not add a diary entry if title or content is null', () => {
    spyOn(window, 'prompt').and.returnValues(null, 'Test Content');
    const initialId = Number(localStorage.getItem('diary_id') || '0');
    component.addDiary();
    const newId = Number(localStorage.getItem('diary_id') || '0');
    expect(newId).toBe(initialId);
  });
});
