import { Exclude, Expose } from 'class-transformer';
import { IsString, IsOptional } from 'class-validator';

@Exclude()
export class MovieDTO {
  @Expose()
  @IsString()
  readonly title: string;

  @Expose()
  @IsString()
  readonly year: string;

  @Expose()
  @IsString()
  readonly plot: string;

  @Expose()
  @IsOptional()
  @IsString({ each: true })
  readonly actors?: string[];
}
