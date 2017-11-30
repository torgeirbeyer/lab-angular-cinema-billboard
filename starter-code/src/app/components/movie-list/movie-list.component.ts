import { Component, OnInit } from '@angular/core';

import { CinemaService } from '../../services/cinema.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies = null;

  constructor( private cinemaService: CinemaService) { }

  ngOnInit() {
    this.movies = this.cinemaService.getMovies()
    console.log(this.movies);
  }

}
