import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { TodoList } from './todo-list';

describe('TodoList', () => {
  let component: TodoList;
  let fixture: ComponentFixture<TodoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoList],
      providers: [
        { provide: ActivatedRoute, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should define function addtodo', () => {
    expect(component.addtodo).toBeDefined();
    expect(typeof component.addtodo).toBe('function');
  });
  it('should define function toggleTodo', () => {
    expect(component.toggleTodo).toBeDefined();
    expect(typeof component.toggleTodo).toBe('function');
  });
  it('should define function removeTodo', () => {
    expect(component.removeTodo).toBeDefined();
    expect(typeof component.removeTodo).toBe('function');
  });
  it('should define function updateHeadline', () => {
    expect(component.updateHeadline).toBeDefined();
    expect(typeof component.updateHeadline).toBe('function');
  });
  it('should define function delateTodolist', () => {
    expect(component.delateTodolist).toBeDefined();
    expect(typeof component.delateTodolist).toBe('function');
  });
});
