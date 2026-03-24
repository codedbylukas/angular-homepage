import { Component, OnInit, ElementRef, ViewChild, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HomeBtn } from '../home-btn/home-btn';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-todo-list',
  imports: [HomeBtn],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList implements OnInit {
  headline = "Hier darunter ist die To-Do-Liste:";
  @ViewChild('todofield', { static: true }) todofieldRef!: ElementRef<HTMLInputElement>;

  todos: Todo[] = [];
  private nextId = 0;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      const saved = localStorage.getItem("todolist");
      if (saved) {
        try {
          this.todos = JSON.parse(saved);
          this.nextId = this.todos.reduce((max, t) => Math.max(max, t.id + 1), 0);
        } catch {
          this.todos = [];
        }
      }
    }
    this.updateHeadline();
  }

  addtodo() {
    const todofield = this.todofieldRef.nativeElement;
    const text = todofield.value.trim();
    if (!text) return;

    this.todos.push({ id: this.nextId++, text, done: false });
    todofield.value = "";
    this.save();
    this.updateHeadline();
  }

  toggleTodo(todo: Todo) {
    todo.done = !todo.done;
    this.save();
  }

  removeTodo(todo: Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id);
    this.save();
    this.updateHeadline();
  }

  updateHeadline() {
    if (this.todos.length === 0) {
      this.headline = "Hier darunter ist die To-Do-Liste:";
    } else {
      this.headline = "Die Notizen:";
    }
  }

  delateTodolist() {
    this.todos = [];
    this.save();
    this.updateHeadline();
  }

  private save() {
    if (this.isBrowser) {
      localStorage.setItem("todolist", JSON.stringify(this.todos));
    }
  }
}
