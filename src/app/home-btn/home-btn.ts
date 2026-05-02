import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-btn',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './home-btn.html',
  styleUrl: './home-btn.scss',
})
export class HomeBtn {}
