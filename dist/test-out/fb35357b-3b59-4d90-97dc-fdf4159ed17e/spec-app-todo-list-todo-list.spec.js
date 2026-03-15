import {
  Component,
  Inject,
  PLATFORM_ID,
  TestBed,
  ViewChild,
  __decorate,
  init_common,
  init_core,
  init_testing,
  init_tslib_es6,
  isPlatformBrowser
} from "./chunk-UADZLHVW.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/todo-list/todo-list.html
var todo_list_default;
var init_todo_list = __esm({
  "angular:jit:template:src/app/todo-list/todo-list.html"() {
    todo_list_default = '<h1 class="rainbow-text">Meine Todo-Liste</h1>\n<div class="center slide-in">\n  <input type="text" placeholder="Notiz eingeben..." #todofield required (keydown.enter)="addtodo()" />\n</div>\n<br />\n<div class="center slide-in">\n  <button (click)="addtodo()">Speichern</button>\n</div>\n<div class="center slide-in">\n  <br />\n  <button class="delate" (click)="delateTodolist()">\n    Ganze Liste l\xF6schen <img src="/assets/img/rubbish.png" class="rubbisch" alt="" />\n  </button>\n</div>\n<h2 #headline class="slide-in">Hier darunter ist die To-Do-Liste:</h2>\n<ol #todolist>\n  @for (todo of todos; track todo.id) {\n  <li>\n    <input type="checkbox" [checked]="todo.done" (change)="toggleTodo(todo)" />\n    <span [class.done]="todo.done">{{ todo.text }}</span>\n    <img src="/assets/img/rubbish.png" class="rubbisch" alt="" (click)="removeTodo(todo)" />\n  </li>\n  }\n</ol>';
  }
});

// angular:jit:style:src/app/todo-list/todo-list.sass
var todo_list_default2;
var init_todo_list2 = __esm({
  "angular:jit:style:src/app/todo-list/todo-list.sass"() {
    todo_list_default2 = '/* src/app/todo-list/todo-list.sass */\n:root {\n  --rubbish: 20;\n}\nh1 {\n  display: flex;\n  justify-content: center;\n  font-family:\n    "Franklin Gothic Medium",\n    "Arial Narrow",\n    Arial,\n    sans-serif;\n  font-size: 4rem;\n}\nh2 {\n  font-size: 3rem;\n  font-family:\n    "Gill Sans",\n    "Gill Sans MT",\n    Calibri,\n    "Trebuchet MS",\n    sans-serif;\n  font-weight: 100;\n  margin: 20px;\n  display: flex;\n  justify-content: center;\n}\nbutton {\n  background-color: green;\n  font-size: 40px;\n  font-family:\n    "Franklin Gothic Medium",\n    "Arial Narrow",\n    Arial,\n    sans-serif;\n  border: none;\n  border-radius: 2rem;\n  padding: 20px;\n  margin: 20px;\n  cursor: pointer;\n}\ninput {\n  padding: 20px;\n  margin: 20px;\n  border-color: rgba(0, 0, 0, 0.233);\n  border-radius: 2rem;\n}\nol {\n  font-size: 20px;\n  padding: 0px;\n  list-style-type: none;\n}\n.center {\n  display: flex;\n  justify-content: center;\n}\n.slide-in {\n  animation: slide-in 225ms linear;\n}\n.rainbow-text {\n  animation: rainbow 3s linear infinite;\n}\n::placeholder {\n  color: rgba(0, 0, 0, 0.233);\n  font-size: 20px;\n}\n.rubbisch {\n  height: 40px;\n  width: 40px;\n  margin-left: 20px;\n}\n.delate {\n  background-color: red;\n}\n.done {\n  text-decoration: line-through;\n  opacity: 0.5;\n}\n@keyframes slide-in {\n  from {\n    transform: translateX(-100%);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@keyframes rainbow {\n  0% {\n    color: red;\n  }\n  14% {\n    color: orange;\n  }\n  28% {\n    color: yellow;\n  }\n  42% {\n    color: green;\n  }\n  57% {\n    color: cyan;\n  }\n  71% {\n    color: blue;\n  }\n  85% {\n    color: purple;\n  }\n  100% {\n    color: red;\n  }\n}\n/*# sourceMappingURL=todo-list.css.map */\n';
  }
});

// src/app/todo-list/todo-list.ts
var TodoList;
var init_todo_list3 = __esm({
  "src/app/todo-list/todo-list.ts"() {
    "use strict";
    init_tslib_es6();
    init_todo_list();
    init_todo_list2();
    init_core();
    init_common();
    TodoList = class TodoList2 {
      todofieldRef;
      headlineRef;
      todos = [];
      nextId = 0;
      isBrowser;
      constructor(platformId) {
        this.isBrowser = isPlatformBrowser(platformId);
      }
      ngOnInit() {
        if (this.isBrowser) {
          const saved = localStorage.getItem("Todolisteninhalt");
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
        if (!text)
          return;
        this.todos.push({ id: this.nextId++, text, done: false });
        todofield.value = "";
        this.save();
        this.updateHeadline();
      }
      toggleTodo(todo) {
        todo.done = !todo.done;
        this.save();
      }
      removeTodo(todo) {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
        this.save();
        this.updateHeadline();
      }
      updateHeadline() {
        const headline = this.headlineRef.nativeElement;
        if (this.todos.length === 0) {
          headline.innerHTML = "Hier darunter ist die To-Do-Liste:";
        } else {
          headline.innerHTML = "Die Notizen:";
        }
      }
      delateTodolist() {
        this.todos = [];
        this.save();
        this.updateHeadline();
      }
      save() {
        if (this.isBrowser) {
          localStorage.setItem("Todolisteninhalt", JSON.stringify(this.todos));
        }
      }
      static ctorParameters = () => [
        { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID] }] }
      ];
      static propDecorators = {
        todofieldRef: [{ type: ViewChild, args: ["todofield", { static: true }] }],
        headlineRef: [{ type: ViewChild, args: ["headline", { static: true }] }]
      };
    };
    TodoList = __decorate([
      Component({
        selector: "app-todo-list",
        imports: [],
        template: todo_list_default,
        styles: [todo_list_default2]
      })
    ], TodoList);
  }
});

// src/app/todo-list/todo-list.spec.ts
var require_todo_list_spec = __commonJS({
  "src/app/todo-list/todo-list.spec.ts"(exports) {
    init_testing();
    init_todo_list3();
    describe("TodoList", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [TodoList]
        }).compileComponents();
        fixture = TestBed.createComponent(TodoList);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should define function addtodo", () => {
        expect(component.addtodo).toBeDefined();
        expect(typeof component.addtodo).toBe("function");
      });
      it("should define function toggleTodo", () => {
        expect(component.toggleTodo).toBeDefined();
        expect(typeof component.toggleTodo).toBe("function");
      });
      it("should define function removeTodo", () => {
        expect(component.removeTodo).toBeDefined();
        expect(typeof component.removeTodo).toBe("function");
      });
      it("should define function updateHeadline", () => {
        expect(component.updateHeadline).toBeDefined();
        expect(typeof component.updateHeadline).toBe("function");
      });
    });
  }
});
export default require_todo_list_spec();
//# sourceMappingURL=spec-app-todo-list-todo-list.spec.js.map
