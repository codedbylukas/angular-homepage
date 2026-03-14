import { Component } from '@angular/core';
import { HomeBtn } from './home-btn/home-btn';

@Component({
  selector: 'app-fun-facts',
  imports: [HomeBtn],
  templateUrl: './fun-facts.html',
  styleUrl: './fun-facts.sass',
})
export class FunFacts {
  playAudio() {
    let randomNumber:Number = Math.floor(Math.random() * 104);
    let audio:HTMLAudioElement = new Audio(`assets/audio/${randomNumber}.wav`);
    audio.play();
  }
}
