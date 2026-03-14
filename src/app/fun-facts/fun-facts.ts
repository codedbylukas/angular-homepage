import { Component } from '@angular/core';
import { HomeBtn } from './home-btn/home-btn';

let playing: boolean = false;
let audio: HTMLAudioElement;
@Component({
  selector: 'app-fun-facts',
  imports: [HomeBtn],
  templateUrl: './fun-facts.html',
  styleUrl: './fun-facts.sass',
})
export class FunFacts {
  playAudio() {
    if (!playing) {
      playing = true;
      let randomNumber: Number = Math.floor(Math.random() * 204);
      audio = new Audio(`assets/audio/${randomNumber}.wav`);
      audio.onended = () => {
        playing = false;
      };
      audio.play();
    }
    else {
      playing = false;
      audio.pause();
    }
  }
}
