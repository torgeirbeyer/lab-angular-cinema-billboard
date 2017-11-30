import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from 'app/services/cinema.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie = null;

  constructor(private activedRoute: ActivatedRoute, private cinemaService: CinemaService) { }

  ngOnInit() {
    this.activedRoute.params.subscribe((params) => {
      this.cinemaService.getMovie(params.id, (movie) => {
        this.movie = movie;
      });
    })
  }

}
