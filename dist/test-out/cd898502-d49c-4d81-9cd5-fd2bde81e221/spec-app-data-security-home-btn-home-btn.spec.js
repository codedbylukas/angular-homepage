import {
  HomeBtn,
  init_home_btn
} from "./chunk-QLMIRIR5.js";
import {
  init_router,
  provideRouter
} from "./chunk-EY6LVNS5.js";
import {
  TestBed,
  init_testing
} from "./chunk-XZGOR4BP.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/data-security/home-btn/home-btn.spec.ts
var require_home_btn_spec = __commonJS({
  "src/app/data-security/home-btn/home-btn.spec.ts"(exports) {
    init_testing();
    init_router();
    init_home_btn();
    describe("HomeBtn", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [HomeBtn],
          providers: [provideRouter([])]
        }).compileComponents();
        fixture = TestBed.createComponent(HomeBtn);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_home_btn_spec();
//# sourceMappingURL=spec-app-data-security-home-btn-home-btn.spec.js.map
