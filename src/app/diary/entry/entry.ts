import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-entry',
  imports: [],
  templateUrl: './entry.html',
  styleUrl: './entry.scss',
})
export class Entry {
  @Input() title = '';
  @Input() text = '';
  @Input() date = '';
  @Input() id = 0;
  del_object(id: number) {
    localStorage.removeItem('diary' + id);
  }
}
