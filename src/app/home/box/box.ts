import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-box',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './box.html',
  styleUrl: './box.scss',
})
export class Box {
  text = {
    headline: 'Hallo, ich bin Lukas',
    project_headline: 'Coole Webseiten',
    sand_site_link: 'Sand Spiel',
    fun_facts: 'Lustige Fakten',
    todo_list: 'ToDo Liste',
    nuber_gessing_game: 'Rate Spiel',
  };
  translateToGerman() {
    this.text = {
      headline: 'Hallo, ich bin Lukas',
      project_headline: 'Coole Webseiten',
      sand_site_link: 'Sand Spiel',
      fun_facts: 'Lustige Fakten',
      todo_list: 'ToDo Liste',
      nuber_gessing_game: 'Rate Spiel',
    };
  }
  translateToEnglish() {
    this.text = {
    headline: "Hello, I'm Lukas",
    project_headline: 'Cool Websites',
    sand_site_link: 'Sand Game',
    fun_facts: 'Fun Facts',
    todo_list: 'ToDo list',
    nuber_gessing_game: 'Gessing Game'
      }
  }
}
