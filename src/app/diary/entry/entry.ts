import { Component, Input} from '@angular/core';
import { HomeBtn } from '../../home-btn/home-btn';

@Component({
  selector: 'app-entry',
  imports: [ HomeBtn ],
  templateUrl: './entry.html',
  styleUrl: './entry.scss',
})
export class Entry {
  @Input() title: string ='';
  @Input() text: string ='';
  @Input() date: string ='';
}
