import {
  Footer,
  init_footer
} from "./chunk-EXCDQJFS.js";
import {
  init_router,
  provideRouter
} from "./chunk-B3WYK46A.js";
import {
  TestBed,
  init_testing
} from "./chunk-6BFDG5YE.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/home/footer/footer.spec.ts
var require_footer_spec = __commonJS({
  "src/app/home/footer/footer.spec.ts"(exports) {
    init_testing();
    init_router();
    init_footer();
    describe("Footer", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Footer],
          providers: [provideRouter([])]
        }).compileComponents();
        fixture = TestBed.createComponent(Footer);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_footer_spec();
//# sourceMappingURL=spec-app-home-footer-footer.spec.js.map
