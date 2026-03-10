import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Footer} from './footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, Footer],
  templateUrl: './home.html',
  styleUrl: './home.sass',
})
export class HomeComponent {

}
