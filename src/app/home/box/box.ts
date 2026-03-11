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
  }
  translateToEnglish() {
    document.getElementById("headline")!.innerHTML = "Hello, I'm Lukas";
  }
}
