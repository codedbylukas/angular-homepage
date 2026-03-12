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
    document.getElementById("headline")!.textContent = "Hallo, ich bin Lukas";
    document.getElementById("project_headline")!.textContent = "Coole Webseiten";
    document.getElementById("platforms")!.textContent = "Plattformen";
    document.getElementById("sand-site-link")!.textContent = "Sand Spiel";
  }
  translateToEnglish() {
    document.getElementById("headline")!.textContent = "Hello, I'm Lukas";
    document.getElementById("project_headline")!.textContent = "Cool Websites";
    document.getElementById("platforms")!.textContent = "Platforms";
    document.getElementById("sand-site-link")!.textContent = "Sand Game";
  }
}
