import { Component } from '@angular/core';
import { Entry } from './entry/entry';

@Component({
  selector: 'app-diary',
  imports: [Entry],
  templateUrl: './diary.html',
  styleUrl: './diary.scss',
})
export class Diary {

}
