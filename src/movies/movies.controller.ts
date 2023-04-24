import { Controller, Get, Query } from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async searchMovies(@Query('title') title: string): Promise<Movie[]> {
    const movies = await this.moviesService.searchMovie(title);

    return movies;
  }
}
