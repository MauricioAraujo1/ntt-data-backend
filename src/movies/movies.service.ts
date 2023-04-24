import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private readonly omdbApiKey = '979af377';

  async searchMovie(title: string): Promise<Movie[]> {
    const url = `http://www.omdbapi.com/?s=${title}&apikey=${this.omdbApiKey}`;

    try {
      const response = await axios.get(url);
      const movies = response.data.Search;
      return movies;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}
