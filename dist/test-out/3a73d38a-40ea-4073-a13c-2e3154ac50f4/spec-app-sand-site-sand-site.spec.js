import {
  HomeBtn,
  init_home_btn
} from "./chunk-GPVUKL7D.js";
import {
  init_router,
  provideRouter
} from "./chunk-B3WYK46A.js";
import {
  Component,
  TestBed,
  ViewEncapsulation,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-6BFDG5YE.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/sand-site/sand-site.html
var sand_site_default;
var init_sand_site = __esm({
  "angular:jit:template:src/app/sand-site/sand-site.html"() {
    sand_site_default = '<div class="center">\n  <button (click)="fireConfetti()" class="confetti-button">Gelber Regen!</button>\n  <app-home-btn></app-home-btn>\n</div>\n<div id="confetti"></div>\n';
  }
});

// angular:jit:style:src/app/sand-site/sand-site.scss
var sand_site_default2;
var init_sand_site2 = __esm({
  "angular:jit:style:src/app/sand-site/sand-site.scss"() {
    sand_site_default2 = "/* src/app/sand-site/sand-site.scss */\n.confetti-piece {\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  background-color: orange;\n  top: 0;\n  left: 50%;\n  opacity: 0.7;\n  border-radius: 50%;\n  animation: confetti-fall 1s linear infinite;\n  z-index: 1000;\n}\n.confetti-button {\n  padding: 10px 20px;\n  font-size: 16px;\n  background-color: #ffcc00;\n  border: none;\n  border-radius: 5px;\n  align-items: center;\n  cursor: pointer;\n  color: rgba(233, 233, 233, 0.9647058824);\n  font-weight: bold;\n}\n.center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}\napp-home-btn {\n  position: absolute;\n  bottom: 20px;\n}\n@keyframes confetti-fall {\n  from {\n    transform: translateY(0) rotate(0deg);\n  }\n  to {\n    transform: translateY(100vh) rotate(360deg);\n  }\n}\n/*# sourceMappingURL=sand-site.css.map */\n";
  }
});

// src/app/sand-site/sand-site.ts
var confetti_list, SandSite;
var init_sand_site3 = __esm({
  "src/app/sand-site/sand-site.ts"() {
    "use strict";
    init_tslib_es6();
    init_sand_site();
    init_sand_site2();
    init_core();
    init_home_btn();
    confetti_list = [];
    SandSite = class SandSite2 {
      fireConfetti() {
        for (let i = 0; i < 100; i++) {
          let confetti = document.createElement("div");
          confetti.classList.add("confetti-piece");
          confetti.style.position = "absolute";
          confetti.style.left = Math.random() * 100 + "vw";
          const duration = Math.random() * 2 + 1;
          confetti.style.animation = `confetti-fall ${duration}s linear infinite`;
          confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
          const container = document.getElementById("confetti");
          if (container) {
            container.appendChild(confetti);
            confetti_list.push(confetti);
          }
        }
      }
    };
    SandSite = __decorate([
      Component({
        selector: "app-sand-site",
        imports: [HomeBtn],
        template: sand_site_default,
        encapsulation: ViewEncapsulation.None,
        styles: [sand_site_default2]
      })
    ], SandSite);
  }
});

// src/app/sand-site/sand-site.spec.ts
var require_sand_site_spec = __commonJS({
  "src/app/sand-site/sand-site.spec.ts"(exports) {
    init_testing();
    init_router();
    init_sand_site3();
    describe("SandSite", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [SandSite],
          providers: [provideRouter([])]
        }).compileComponents();
        fixture = TestBed.createComponent(SandSite);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("should have a fireConfetti method", () => {
        expect(component.fireConfetti).toBeDefined();
        expect(typeof component.fireConfetti).toEqual("function");
      });
      it("should call fireConfetti when button clicked", () => {
        spyOn(component, "fireConfetti");
        const button = fixture.nativeElement.querySelector("button");
        button.click();
        expect(component.fireConfetti).toHaveBeenCalled();
      });
    });
  }
});
export default require_sand_site_spec();
//# sourceMappingURL=spec-app-sand-site-sand-site.spec.js.map
