import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FriendsComponent } from './components/friends/friends.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FriendItemComponent } from './components/friend-item/friend-item.component';
import { GamesComponent } from './components/games/games.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CardsComponent } from './components/cards/cards.component';
import { LibraryComponent } from './components/library/library.component';

import { AuthGuard } from './auth.guard';
import { FriendPipe } from './pipes/friend-search.pipe';
import { GamePipe } from './pipes/game-search.pipe';
import { FilterbarComponent } from './components/filterbar/filterbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsComponent,
    HomeComponent, 
    LoginComponent, 
    FriendItemComponent, 
    NavbarComponent, 
    ProfileComponent,
    FriendPipe,
    GamePipe,
    GamesComponent,
    CardsComponent,
    LibraryComponent,
    FilterbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
