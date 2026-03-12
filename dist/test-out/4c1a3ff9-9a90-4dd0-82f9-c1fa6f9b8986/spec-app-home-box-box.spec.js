import {
  Box,
  init_box
} from "./chunk-M3X2GVGB.js";
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
      it("should update headline text when German button clicked", () => {
        const button = fixture.nativeElement.querySelector("#german-button");
        button.click();
        fixture.detectChanges();
        const headline = fixture.nativeElement.querySelector("#headline");
        expect(headline.textContent).toContain("Hallo, ich bin Lukas");
      });
      it("should update project headline text when German button clicked", () => {
        const button = fixture.nativeElement.querySelector("#german-button");
        button.click();
        fixture.detectChanges();
        const projectHeadline = fixture.nativeElement.querySelector("#project_headline");
        expect(projectHeadline.textContent).toContain("Coole Webseiten");
      });
      it("should update platforms text when German button clicked", () => {
        const button = fixture.nativeElement.querySelector("#german-button");
        button.click();
        fixture.detectChanges();
        const platforms = fixture.nativeElement.querySelector("#platforms");
        expect(platforms.textContent).toContain("Plattformen");
      });
      it("should update sand site link text when German button clicked", () => {
        const button = fixture.nativeElement.querySelector("#german-button");
        button.click();
        fixture.detectChanges();
        const sandSiteLink = fixture.nativeElement.querySelector("#sand-site-link");
        expect(sandSiteLink.textContent).toContain("Sand Spiel");
      });
      it("should update text when English button clicked", () => {
        const button = fixture.nativeElement.querySelector("#english-button");
        button.click();
        fixture.detectChanges();
        const headline = fixture.nativeElement.querySelector("#headline");
        expect(headline.textContent).toContain("Hello, I'm Lukas");
        const projectHeadline = fixture.nativeElement.querySelector("#project_headline");
        expect(projectHeadline.textContent).toContain("Cool Websites");
        const platforms = fixture.nativeElement.querySelector("#platforms");
        expect(platforms.textContent).toContain("Platforms");
        const sandSiteLink = fixture.nativeElement.querySelector("#sand-site-link");
        expect(sandSiteLink.textContent).toContain("Sand Game");
      });
      it("should update headline text when English button clicked", () => {
        const button = fixture.nativeElement.querySelector("#english-button");
        button.click();
        fixture.detectChanges();
        const headline = fixture.nativeElement.querySelector("#headline");
        expect(headline.textContent).toContain("Hello, I'm Lukas");
      });
      it("should update project headline text when English button clicked", () => {
        const button = fixture.nativeElement.querySelector("#english-button");
        button.click();
        fixture.detectChanges();
        const projectHeadline = fixture.nativeElement.querySelector("#project_headline");
        expect(projectHeadline.textContent).toContain("Cool Websites");
      });
      it("should update platforms text when English button clicked", () => {
        const button = fixture.nativeElement.querySelector("#english-button");
        button.click();
        fixture.detectChanges();
        const platforms = fixture.nativeElement.querySelector("#platforms");
        expect(platforms.textContent).toContain("Platforms");
      });
      it("should update Sand Game text when English button clicked", () => {
        const button = fixture.nativeElement.querySelector("#english-button");
        button.click();
        fixture.detectChanges();
        const sandSiteLink = fixture.nativeElement.querySelector("#sand-site-link");
        expect(sandSiteLink.textContent).toContain("Sand Game");
      });
    });
  }
});
export default require_box_spec();
//# sourceMappingURL=spec-app-home-box-box.spec.js.map
