import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MyHomeComponent } from './pages/my-home/my-home.component';
import { MyMovieComponent } from './pages/my-movie/my-movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { CinemaService } from 'app/services/cinema.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MyHomeComponent },
  { path: 'movie/:id', component: MyMovieComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MyHomeComponent,
    MyMovieComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    CinemaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
