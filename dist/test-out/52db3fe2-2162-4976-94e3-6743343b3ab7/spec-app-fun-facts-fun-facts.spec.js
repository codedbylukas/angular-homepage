import {
  HomeBtn,
  init_home_btn
} from "./chunk-UV2O47XH.js";
import {
  init_router,
  provideRouter
} from "./chunk-EY6LVNS5.js";
import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-XZGOR4BP.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/fun-facts/fun-facts.html
var fun_facts_default;
var init_fun_facts = __esm({
  "angular:jit:template:src/app/fun-facts/fun-facts.html"() {
    fun_facts_default = '<div class="half-center">\n  <h1>Fun Facts</h1>\n</div>\n\n<div class="center">\n  <button (click)="playAudio()" id="button-click">Click me</button>\n</div>\n<div class="end-center">\n  <app-home-btn></app-home-btn>\n</div>';
  }
});

// angular:jit:style:src/app/fun-facts/fun-facts.sass
var fun_facts_default2;
var init_fun_facts2 = __esm({
  "angular:jit:style:src/app/fun-facts/fun-facts.sass"() {
    fun_facts_default2 = "/* src/app/fun-facts/fun-facts.sass */\nbutton {\n  background-color: #0ae2f1;\n  border: none;\n  border-radius: 50%;\n  width: 180px;\n  height: 80px;\n  font-size: 40px;\n  color: white;\n}\nh1 {\n  font-size: 40px;\n}\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\n.half-center {\n  display: flex;\n  justify-content: center;\n}\n.end-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=fun-facts.css.map */\n";
  }
});

// src/app/fun-facts/fun-facts.ts
var FunFacts;
var init_fun_facts3 = __esm({
  "src/app/fun-facts/fun-facts.ts"() {
    "use strict";
    init_tslib_es6();
    init_fun_facts();
    init_fun_facts2();
    init_core();
    init_home_btn();
    FunFacts = class FunFacts2 {
      playAudio() {
        let randomNumber = Math.floor(Math.random() * 104);
        let audio = new Audio(`assets/audio/${randomNumber}.wav`);
        audio.play();
      }
    };
    FunFacts = __decorate([
      Component({
        selector: "app-fun-facts",
        imports: [HomeBtn],
        template: fun_facts_default,
        styles: [fun_facts_default2]
      })
    ], FunFacts);
  }
});

// src/app/fun-facts/fun-facts.spec.ts
var require_fun_facts_spec = __commonJS({
  "src/app/fun-facts/fun-facts.spec.ts"(exports) {
    init_testing();
    init_router();
    init_fun_facts3();
    describe("FunFacts", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [FunFacts],
          providers: [provideRouter([])]
        }).compileComponents();
        fixture = TestBed.createComponent(FunFacts);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should implement playAudio function", () => {
        expect(component.playAudio).toBeDefined();
        expect(typeof component.playAudio).toEqual("function");
      });
    });
  }
});
export default require_fun_facts_spec();
//# sourceMappingURL=spec-app-fun-facts-fun-facts.spec.js.map
