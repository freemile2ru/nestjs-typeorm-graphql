import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany, PrimaryGeneratedColumn,
  } from 'typeorm';
  import BookGenre from './book-genre.entity';
  
  @Entity()
  export default class Genre {
  
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({name: 'genre_name'})
    name: string;
  
    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
  
    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
  
    // Associations
    @OneToMany(() => BookGenre, bookGenre => bookGenre.book)
    bookConnection: Promise<BookGenre[]>;
  }