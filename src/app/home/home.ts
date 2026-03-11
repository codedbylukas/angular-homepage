import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer} from './footer/footer';
import { Box } from './box/box';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, Footer, Box],
  templateUrl: './home.html',
  styleUrl: './home.sass',
})
export class HomeComponent {

}
