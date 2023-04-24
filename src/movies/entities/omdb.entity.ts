import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  title: string;

  @Column()
  plot: string;

  @Column()
  actors: string;
}
