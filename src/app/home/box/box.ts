import { Component } from '@angular/core';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './box.html',
  styleUrl: './box.sass',
})
export class Box {
   translateToGerman() {
    document.getElementById("headline")!.innerHTML = "Hallo, ich bin Lukas";
    document.getElementById("project_headline")!.innerHTML = "Coole Webseiten";
    document.getElementById("platforms")!.innerHTML = "Plattformen";
    document.getElementById("sand-site-link")!.innerHTML = "Sand Spiel";
  }
  translateToEnglish() {
    document.getElementById("headline")!.innerHTML = "Hello, I'm Lukas";
    document.getElementById("project_headline")!.innerHTML = "Cool Websites";
    document.getElementById("platforms")!.innerHTML = "Platforms";
    document.getElementById("sand-site-link")!.innerHTML = "Sand Game";
  }
}
