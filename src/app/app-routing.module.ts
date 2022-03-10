import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendsComponent } from './components/friends/friends.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './components/profile/profile.component';
import { GamesComponent } from './components/games/games.component';
import { LibraryComponent } from './components/library/library.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'games', component: GamesComponent},
  { path: 'library', component: LibraryComponent},
  { path: 'friends', component: FriendsComponent},
  { path: 'profile', component: ProfileComponent},

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
