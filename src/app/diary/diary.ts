import { Component, OnInit } from '@angular/core';
import { Entry } from './entry/entry';
<<<<<<< HEAD
import { stringify } from 'querystring';
interface DiaryEntry {
  id: number;
  date: string; // save date as string
  title: string;
  content: string;
}
=======

interface DiaryEntry {
  id: number;
  date: string;
  title: string;
  content: string;
}

>>>>>>> 00fb37c (add)
@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [Entry],
  templateUrl: './diary.html',
  styleUrl: './diary.scss',
})
<<<<<<< HEAD
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
=======

export class Diary implements OnInit {
  diaries: DiaryEntry[] = [];
  id: number = 0;
  ngOnInit() {
    this.loadDiaries();
  }
  loadDiaries() {
    this.diaries = [];
    const storedId = localStorage.getItem('diary_id');
    this.id = storedId ? Number(storedId) : 0;

    for (let i = 0; i < this.id; i++) {
      const data = localStorage.getItem('diary' + i);
      if (data) {
        this.diaries.push(JSON.parse(data));
      }
    }
  }

  get_date(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    return `${day}.${month}.${now.getFullYear()}`;
  }

  addDiary() {
    try {
      // 2. Aktuelle ID holen oder bei 0 starten
      const currentId = Number(localStorage.getItem('diary_id') || '0');

      const newEntry: DiaryEntry = {
        id: currentId,
        date: this.get_date(),
        title: 'Neuer Eintrag',
        content: 'Inhalt hier...',
      };

      // 3. Speichern mit korrektem "this" oder lokaler Variable
      localStorage.setItem('diary' + currentId, JSON.stringify(newEntry));
      localStorage.setItem('diary_id', String(currentId + 1));

      // UI aktualisieren
      this.diaries.push(newEntry);
    } catch (error) {
      console.error("Speichern fehlgeschlagen:", error);
    }
  }
}
>>>>>>> 00fb37c (add)
