import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { DataSecurityComponent } from './data-security/data-security';
import { SandSite } from './sand-site/sand-site';
import { FunFacts } from './fun-facts/fun-facts';
import { TodoList } from './todo-list/todo-list';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data-security', component: DataSecurityComponent },
  { path: 'sand-site', component: SandSite },
  { path: 'fun-facts', component: FunFacts},
  { path : 'todo-list', component: TodoList},
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
