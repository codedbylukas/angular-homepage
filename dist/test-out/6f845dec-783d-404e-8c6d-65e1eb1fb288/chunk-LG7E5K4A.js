import {
  RouterModule,
  init_router
} from "./chunk-ONWKA7P4.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-6BFDG5YE.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/home/footer/footer.html
var footer_default;
var init_footer = __esm({
  "angular:jit:template:src/app/home/footer/footer.html"() {
    footer_default = '<div>\n	<h1>Footer</h1>\n	<div class="links">\n		<a routerLink="/data-security">Datenschutz</a>\n	</div>\n\n</div>';
  }
});

// angular:jit:style:src/app/home/footer/footer.sass
var footer_default2;
var init_footer2 = __esm({
  "angular:jit:style:src/app/home/footer/footer.sass"() {
    footer_default2 = "/* src/app/home/footer/footer.sass */\ndiv {\n  padding-left: 20px;\n  padding-right: 20px;\n  background-color: rgba(82, 103, 221, 0.7411764706);\n}\nh1 {\n  color: rgba(51, 51, 51, 0.8549019608);\n  text-align: center;\n}\n.links {\n  background-color: transparent;\n  display: flex;\n  justify-content: center;\n  padding-top: 10px;\n}\n.links a {\n  color: rgba(51, 51, 51, 0.8549019608);\n  text-decoration: none;\n  margin: 0 10px;\n}\n.links a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=footer.css.map */\n";
  }
});

// src/app/home/footer/footer.ts
var Footer;
var init_footer3 = __esm({
  "src/app/home/footer/footer.ts"() {
    "use strict";
    init_tslib_es6();
    init_footer();
    init_footer2();
    init_core();
    init_router();
    Footer = class Footer2 {
    };
    Footer = __decorate([
      Component({
        selector: "app-footer",
        standalone: true,
        imports: [RouterModule],
        template: footer_default,
        styles: [footer_default2]
      })
    ], Footer);
  }
});

export {
  Footer,
  init_footer3 as init_footer
};
//# sourceMappingURL=chunk-LG7E5K4A.js.map
