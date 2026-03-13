import {
  Component,
  TestBed,
  __decorate,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-SGB6LZ2K.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/fun-facts/fun-facts.html
var fun_facts_default;
var init_fun_facts = __esm({
  "angular:jit:template:src/app/fun-facts/fun-facts.html"() {
    fun_facts_default = "<p>fun-facts works!</p>\n";
  }
});

// angular:jit:style:src/app/fun-facts/fun-facts.sass
var fun_facts_default2;
var init_fun_facts2 = __esm({
  "angular:jit:style:src/app/fun-facts/fun-facts.sass"() {
    fun_facts_default2 = "/* src/app/fun-facts/fun-facts.sass */\n/*# sourceMappingURL=fun-facts.css.map */\n";
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
    FunFacts = class FunFacts2 {
    };
    FunFacts = __decorate([
      Component({
        selector: "app-fun-facts",
        imports: [],
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
    init_fun_facts3();
    describe("FunFacts", () => {
      let component;
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [FunFacts]
        }).compileComponents();
        fixture = TestBed.createComponent(FunFacts);
        component = fixture.componentInstance;
        fixture.detectChanges();
      }));
      it("should create", () => {
        expect(component).toBeTruthy();
      });
    });
  }
});
export default require_fun_facts_spec();
//# sourceMappingURL=spec-app-fun-facts-fun-facts.spec.js.map
