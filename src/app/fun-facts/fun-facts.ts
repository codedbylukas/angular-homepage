import { Component } from '@angular/core';

@Component({
  selector: 'app-fun-facts',
  imports: [],
  templateUrl: './fun-facts.html',
  styleUrl: './fun-facts.sass',
})
export class FunFacts {
  playAudio() {
    let randomNumber = Math.floor(Math.random() * 104);
    let audio = new Audio(`assets/audio/${randomNumber}.wav`);
    audio.play();
  }
}
