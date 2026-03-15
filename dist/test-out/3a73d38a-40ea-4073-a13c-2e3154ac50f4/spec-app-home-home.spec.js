import {
  Box,
  init_box
} from "./chunk-22GVGA44.js";
import {
  Footer,
  init_footer
} from "./chunk-5CBEUZBE.js";
import {
  RouterModule,
  init_router,
  provideRouter
} from "./chunk-B3WYK46A.js";
import {
  Component,
  TestBed,
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

// angular:jit:template:src/app/home/home.html
var home_default;
var init_home = __esm({
  "angular:jit:template:src/app/home/home.html"() {
    home_default = "<h1>Home</h1>\n<app-box></app-box>\n<app-footer></app-footer>";
  }
});

// angular:jit:style:src/app/home/home.scss
var home_default2;
var init_home2 = __esm({
  "angular:jit:style:src/app/home/home.scss"() {
    home_default2 = "/* src/app/home/home.scss */\nh1 {\n  font-size: 3rem;\n  padding-left: 20px;\n  padding-right: 20px;\n  text-align: center;\n}\napp-footer {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=home.css.map */\n";
  }
});

// src/app/home/home.ts
var HomeComponent;
var init_home3 = __esm({
  "src/app/home/home.ts"() {
    "use strict";
    init_tslib_es6();
    init_home();
    init_home2();
    init_core();
    init_router();
    init_footer();
    init_box();
    HomeComponent = class HomeComponent2 {
    };
    HomeComponent = __decorate([
      Component({
        selector: "app-home",
        standalone: true,
        imports: [RouterModule, Footer, Box],
        template: home_default,
        styles: [home_default2]
      })
    ], HomeComponent);
  }
});

// src/app/home/home.spec.ts
var require_home_spec = __commonJS({
  "src/app/home/home.spec.ts"(exports) {
    init_testing();
    init_router();
    init_home3();
    describe("Home", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [HomeComponent],
          providers: [provideRouter([])]
        }).compileComponents();
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_spec();
//# sourceMappingURL=spec-app-home-home.spec.js.map
