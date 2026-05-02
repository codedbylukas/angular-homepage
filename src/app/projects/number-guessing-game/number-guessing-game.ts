import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeBtn } from '../../home-btn/home-btn';

@Component({
  selector: 'app-number-guessing-game',
  standalone: true,
  imports: [CommonModule, FormsModule, HomeBtn],
  templateUrl: './number-guessing-game.html',
  styleUrl: './number-guessing-game.scss',
})
export class NumberGuessingGame {
  guess: number | null = null;
  randomNumber: number = Math.floor(Math.random() * 100) + 1;
  message = '';
  attempts = 0;
  gameWon = false;

  checkGuess() {
    if (this.guess === null) {
      this.message = 'Bitte gib eine Zahl ein.';
      return;
    }
    this.attempts++;
    if (this.guess === this.randomNumber) {
      this.message = 'Richtig! Du hast die Zahl erraten.';
      this.gameWon = true;
    } else if (this.guess < this.randomNumber) {
      this.message = 'Deine Zahl ist zu niedrig. Versuche es noch einmal.';
    } else {
      this.message = 'Deine Zahl ist zu hoch. Versuche es noch einmal.';
    }
  }

  resetGame() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
    this.guess = null;
    this.message = '';
    this.attempts = 0;
    this.gameWon = false;
  }
}
