import { Component, OnInit } from '@angular/core';
import { Entry } from './entry/entry';
import { CommonModule } from '@angular/common';
import { HomeBtn } from "../home-btn/home-btn";
interface DiaryEntry {
  id: number;
  date: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-diary',
  standalone: true,
  imports: [Entry, CommonModule, HomeBtn],
  templateUrl: './diary.html',
  styleUrl: './diary.scss',
})
export class Diary implements OnInit {
  diaries: DiaryEntry[] = [];
  id = 0;
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
      const currentId = Number(localStorage.getItem('diary_id') || '0');
      const title = prompt('Titel');
      const content = prompt('Inhalt');
      if (title == null || content == null) {
        return;
      }
      const newEntry: DiaryEntry = {
        id: currentId,
        date: this.get_date(),
        title: title,
        content: content,
      };

      localStorage.setItem('diary' + currentId, JSON.stringify(newEntry));
      localStorage.setItem('diary_id', String(currentId + 1));

      this.diaries.push(newEntry);
    } catch (error) {
      console.error('Speichern fehlgeschlagen:', error);
    }
  }
  del_all_items_diary() {
    if (this.diaries.length == 0) {
      return;
    }
    else {
      if (confirm('Bist du sicher, dass du alle Einträge löschen möchtest?')) {
        localStorage.clear();
        this.diaries = [];
        this.id = 0;
      }
    }
  }
  updateGUI() {
    this.loadDiaries();
  }
}

