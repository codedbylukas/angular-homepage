import { Component, ViewEncapsulation } from '@angular/core';
import { HomeBtn } from '../home-btn/home-btn'

let confetti_list: HTMLElement[] = [];
@Component({
  selector: 'app-sand-site',
  imports: [HomeBtn],
  templateUrl: './sand-site.html',
  styleUrl: './sand-site.scss',
  encapsulation: ViewEncapsulation.None
})
export class SandSite {
  fireConfetti() {
    for (let i = 0; i < 100; i++) {
      let confetti = document.createElement('div');
      confetti.classList.add('confetti-piece');
      confetti.style.position = 'absolute';
      confetti.style.left = Math.random() * 100 + 'vw';

      const duration = Math.random() * 2 + 1;
      confetti.style.animation = `confetti-fall ${duration}s linear infinite`;

      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

      const container = document.getElementById('confetti');
      if (container) {
        container.appendChild(confetti);
        confetti_list.push(confetti);
      }
    }
  }
}
