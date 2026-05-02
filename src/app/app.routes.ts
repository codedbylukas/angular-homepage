import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { DataSecurityComponent } from './data-security/data-security';
import { SandSite } from './sand-site/sand-site';
import { FunFacts } from './fun-facts/fun-facts';
import { TodoList } from './todo-list/todo-list';
import { NumberGuessingGame } from './number-guessing-game/number-guessing-game';
import { Diary } from './diary/diary';

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
