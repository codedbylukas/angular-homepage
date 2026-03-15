import {
  RouterLink,
  RouterModule,
  init_router
} from "./chunk-6H256IBF.js";
import {
  Component,
  __decorate,
  init_core,
  init_tslib_es6
} from "./chunk-UADZLHVW.js";
import {
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src/app/home/box/box.html
var box_default;
var init_box = __esm({
  "angular:jit:template:src/app/home/box/box.html"() {
    box_default = '<div class="container">\n    <img (click)="translateToGerman()" src="assets/img/de.svg" id="german-button" class="language language-de" alt="DE">\n    <img (click)="translateToEnglish()" src="assets/img/us.svg" id="english-button" class="language" alt="US">\n    <h1 id="headline">Hallo, ich bin Lukas</h1>\n    <h2 id="project_headline">Coole Webseiten</h2>\n    <div class="projects">\n        <a routerLink="/sand-site" id="sand-site-link">Sand Spiel</a>\n        <a routerLink="/fun-facts"id="fun-facts">Lustige Fakten</a>\n        <a routerLink="/todo-list"id="fun-facts">Lustige Fakten</a>\n    </div> \n    <div class="footer" id="copyright">\n        <p>&copy; 2026 <i>Lukas</i></p>\n    </div>\n</div>';
  }
});

// angular:jit:style:src/app/home/box/box.sass
var box_default2;
var init_box2 = __esm({
  "angular:jit:style:src/app/home/box/box.sass"() {
    box_default2 = "/* src/app/home/box/box.sass */\nh1 {\n  color: #333;\n  cursor: context-menu;\n}\nh2 {\n  color: #555;\n  cursor: context-menu;\n  text-align: center;\n}\np {\n  margin: 0 0 10px;\n  cursor: context-menu;\n}\na {\n  display: inline-block;\n  margin: 10px;\n  padding: 10px 20px;\n  background-color: #007BFF;\n  color: white;\n  text-decoration: none;\n  border-radius: 5px;\n  transition: background-color 0.3s ease;\n}\n.container {\n  animation: slide-in-left 225ms linear;\n  max-width: 800px;\n  margin: auto;\n  background: #fff;\n  padding: 20px;\n  position: relative;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n}\n.profile-pic {\n  max-width: 150px;\n  height: auto;\n  border-radius: 8px;\n  margin: 20px 0;\n}\n.footer {\n  margin-top: 20px;\n  font-size: 0.9em;\n  color: rgba(119, 119, 119, 0.6549019608);\n}\n.footer:hover {\n  color: #777777;\n}\n.language {\n  animation: slide-in-right 225ms ease-in-out;\n  width: 50px;\n  height: 20px;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  cursor: pointer;\n}\n.language-de {\n  right: 55px;\n}\n.projects {\n  display: flex;\n  justify-content: center;\n  margin-top: 40px;\n}\n@keyframes slide-in-left {\n  from {\n    transform: translateX(-100vh);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n@keyframes slide-in-right {\n  from {\n    transform: translateX(100vh);\n  }\n  to {\n    transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=box.css.map */\n";
  }
});

// src/app/home/box/box.ts
var Box;
var init_box3 = __esm({
  "src/app/home/box/box.ts"() {
    "use strict";
    init_tslib_es6();
    init_box();
    init_box2();
    init_core();
    init_router();
    Box = class Box2 {
      translateToGerman() {
        document.getElementById("headline").textContent = "Hallo, ich bin Lukas";
        document.getElementById("project_headline").textContent = "Coole Webseiten";
        document.getElementById("sand-site-link").textContent = "Sand Spiel";
        document.getElementById("fun-facts").textContent = "Lustige Fakten";
      }
      translateToEnglish() {
        document.getElementById("headline").textContent = "Hello, I'm Lukas";
        document.getElementById("project_headline").textContent = "Cool Websites";
        document.getElementById("sand-site-link").textContent = "Sand Game";
        document.getElementById("fun-facts").textContent = "Fun Facts";
      }
    };
    Box = __decorate([
      Component({
        selector: "app-box",
        standalone: true,
        imports: [RouterLink, RouterModule],
        template: box_default,
        styles: [box_default2]
      })
    ], Box);
  }
});

export {
  Box,
  init_box3 as init_box
};
//# sourceMappingURL=chunk-BXGGYBWR.js.map
