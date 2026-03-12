import {
  Box,
  init_box
} from "./chunk-KZAUDA6B.js";
import {
  init_router,
  provideRouter
} from "./chunk-37RHH43V.js";
import "./chunk-4A3UCWFO.js";
import {
  TestBed,
  init_testing
} from "./chunk-SGB6LZ2K.js";
import {
  __async,
  __commonJS
} from "./chunk-TTULUY32.js";

// src/app/home/box/box.spec.ts
var require_box_spec = __commonJS({
  "src/app/home/box/box.spec.ts"(exports) {
    init_testing();
    init_router();
    init_box();
    describe("Box", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [Box],
          providers: [provideRouter([])]
        }).compileComponents();
        fixture = TestBed.createComponent(Box);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
      it("Translate English is defined", () => {
        expect(component.translateToEnglish).toBeDefined();
        expect(typeof component.translateToEnglish).toEqual("function");
      });
      it("Translate German is defined", () => {
        expect(component.translateToGerman).toBeDefined();
        expect(typeof component.translateToGerman).toEqual("function");
      });
      it("should call translateToEnglish when English button clicked", () => {
        spyOn(component, "translateToEnglish");
        const button = fixture.nativeElement.querySelector("#english-button");
        button.click();
        expect(component.translateToEnglish).toHaveBeenCalled();
      });
      it("should call translateToGerman when German button clicked", () => {
        spyOn(component, "translateToGerman");
        const button = fixture.nativeElement.querySelector("#german-button");
        button.click();
        expect(component.translateToGerman).toHaveBeenCalled();
      });
    });
  }
});
export default require_box_spec();
//# sourceMappingURL=spec-app-home-box-box.spec.js.map
