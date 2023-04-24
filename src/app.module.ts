import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { Movie } from './movies/entities/movie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { MovieDTO } from './movies/dto/movie.dto';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
    }),
    TypeOrmModule.forFeature([Movie]),
  ],
  controllers: [MoviesController],
  providers: [
    MoviesService,
    MovieDTO,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
