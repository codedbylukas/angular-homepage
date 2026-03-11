import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  imports: [],
  templateUrl: './box.html',
  styleUrl: './box.sass',
})
export class Box {
   translateToGerman() {
    document.getElementById("headline")!.innerHTML = "Hallo, ich bin Lukas";
    document.getElementById("project_headline")!.innerHTML = "Coole Webseiten";
    document.getElementById("platforms")!.innerHTML = "Plattformen";
  }
  translateToEnglish() {
    document.getElementById("headline")!.innerHTML = "Hello, I'm Lukas";
    document.getElementById("project_headline")!.innerHTML = "Cool Websites";
    document.getElementById("platforms")!.innerHTML = "Platforms";
  }
}
