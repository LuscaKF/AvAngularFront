import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileListComponent } from './pages/profile/profile-list/profile-list.component';
import { ProfileCreateUpdateComponent } from './pages/profile/profile-create-update/profile-create-update.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileListComponent },
  { path: 'profile/create', component: ProfileCreateUpdateComponent },
  { path: 'profile/edit/:id', component: ProfileCreateUpdateComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' } // Redirect to home if route not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
