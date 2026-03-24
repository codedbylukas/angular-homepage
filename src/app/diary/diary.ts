import { Component } from '@angular/core';
import { Entry } from './entry/entry';
import { stringify } from 'querystring';
interface DiaryEntry {
  id: number;
  date: string; // save date as string
  title: string;
  content: string;
}
@Component({
  selector: 'app-diary',
  imports: [Entry],
  templateUrl: './diary.html',
  styleUrl: './diary.scss',
})
export class Diary {
  get_date() :string { 
    const now: Date = new Date();
    const day: string = String(now.getDate()).padStart(2, '0');
    const month: string = String(now.getMonth() + 1).padStart(2, '0');
    const year: number = now.getFullYear();
    let formattedDate: string = `${day}.${month}.${year}`;
    return formattedDate;
  }
}
