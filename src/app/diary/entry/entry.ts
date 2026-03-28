import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-entry',
  imports: [],
  templateUrl: './entry.html',
  styleUrl: './entry.scss',
})
export class Entry {
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() date: string = '';
}
