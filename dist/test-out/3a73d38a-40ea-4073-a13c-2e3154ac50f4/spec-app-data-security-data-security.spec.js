import {
  HomeBtn,
  init_home_btn
} from "./chunk-OYP7D3SV.js";
import {
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

// angular:jit:template:src/app/data-security/data-security.html
var data_security_default;
var init_data_security = __esm({
  "angular:jit:template:src/app/data-security/data-security.html"() {
    data_security_default = "<h1>Datenschutz</h1>\n\n<p>\nEs werden keine Daten von dir gespeichert.\nEs werden auch keine Cookies verwendet oder andere Tracking-Technologien eingesetzt.\nDie Webseite ist komplett kostenlos und es gibt keine Werbung.\n</p>\n\n<app-home-btn></app-home-btn>\n\n";
  }
});

// angular:jit:style:src/app/data-security/data-security.scss
var data_security_default2;
var init_data_security2 = __esm({
  "angular:jit:style:src/app/data-security/data-security.scss"() {
    data_security_default2 = "/* src/app/data-security/data-security.scss */\nh1 {\n  font-size: 4rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\np {\n  font-size: 1.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data-security.css.map */\n";
  }
});

// src/app/data-security/data-security.ts
var DataSecurityComponent;
var init_data_security3 = __esm({
  "src/app/data-security/data-security.ts"() {
    "use strict";
    init_tslib_es6();
    init_data_security();
    init_data_security2();
    init_core();
    init_home_btn();
    DataSecurityComponent = class DataSecurityComponent2 {
    };
    DataSecurityComponent = __decorate([
      Component({
        selector: "app-data-security",
        imports: [HomeBtn],
        template: data_security_default,
        styles: [data_security_default2]
      })
    ], DataSecurityComponent);
  }
});

// src/app/data-security/data-security.spec.ts
var require_data_security_spec = __commonJS({
  "src/app/data-security/data-security.spec.ts"(exports) {
    init_testing();
    init_router();
    init_data_security3();
    describe("DataSecurity", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [DataSecurityComponent],
          providers: [provideRouter([])]
        }).compileComponents();
        fixture = TestBed.createComponent(DataSecurityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_data_security_spec();
//# sourceMappingURL=spec-app-data-security-data-security.spec.js.map
