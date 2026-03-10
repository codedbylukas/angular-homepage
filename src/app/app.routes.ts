import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { DataSecurityComponent } from './data-security/data-security';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'data-security', component: DataSecurityComponent }
];