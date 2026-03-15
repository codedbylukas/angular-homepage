import {
  RouterLink,
  RouterModule,
  init_router
} from "./chunk-B3WYK46A.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-6BFDG5YE.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/sand-site/home-btn/home-btn.html
var home_btn_default;
var init_home_btn = __esm({
  "angular:jit:template:src/app/sand-site/home-btn/home-btn.html"() {
    home_btn_default = '<div>\n	<button routerLink="/">Home</button>\n</div>\n';
  }
});

// angular:jit:style:src/app/sand-site/home-btn/home-btn.scss
var home_btn_default2;
var init_home_btn2 = __esm({
  "angular:jit:style:src/app/sand-site/home-btn/home-btn.scss"() {
    home_btn_default2 = "/* src/app/sand-site/home-btn/home-btn.scss */\nbutton {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100px;\n  height: 40px;\n  background-color: #007bff;\n  border: none;\n  border-radius: 50%;\n  font-size: 60px;\n  padding: 140px;\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\ndiv {\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n/*# sourceMappingURL=home-btn.css.map */\n";
  }
});

// src/app/sand-site/home-btn/home-btn.ts
var HomeBtn;
var init_home_btn3 = __esm({
  "src/app/sand-site/home-btn/home-btn.ts"() {
    "use strict";
    init_tslib_es6();
    init_home_btn();
    init_home_btn2();
    init_core();
    init_router();
    HomeBtn = class HomeBtn2 {
    };
    HomeBtn = __decorate([
      Component({
        selector: "app-home-btn",
        standalone: true,
        imports: [RouterLink, RouterModule],
        template: home_btn_default,
        styles: [home_btn_default2]
      })
    ], HomeBtn);
  }
});

export {
  HomeBtn,
  init_home_btn3 as init_home_btn
};
//# sourceMappingURL=chunk-GPVUKL7D.js.map
