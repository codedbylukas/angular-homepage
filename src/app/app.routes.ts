import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { DataSecurityComponent } from './data-security/data-security';
import { SandSite } from './projects/sand-site/sand-site';
import { FunFacts } from './projects/fun-facts/fun-facts';
import { TodoList } from './projects/todo-list/todo-list';
import { NumberGuessingGame } from './projects/number-guessing-game/number-guessing-game';
import { Diary } from './projects/diary/diary';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data-security', component: DataSecurityComponent },
  { path: 'sand-site', component: SandSite },
  { path: 'fun-facts', component: FunFacts },
  { path: 'todo-list', component: TodoList },
  { path: 'number-gessing-game', component: NumberGuessingGame },
  { path: 'diary', component: Diary },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
