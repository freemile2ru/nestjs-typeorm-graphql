import {
    Entity,
    PrimaryColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne, JoinColumn, PrimaryGeneratedColumn,
  } from 'typeorm';
  import Genre from './genre.entity';
  import Book from './book.entity';
  import { ObjectType, Field } from '@nestjs/graphql';
  
  @ObjectType()
  @Entity({"name": "book-genres"})
  export default class BookGenre {
    
    @Field()
    @PrimaryGeneratedColumn()
    id: number;
  
    @Field()
    @PrimaryColumn({name: 'book_id'})
    bookId: number;
  
    @Field()
    @PrimaryColumn({name: 'genre_id'})
    genreId: number;
  
    @Field()
    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
  
    @Field()
    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
  
    // Associations
    @ManyToOne(() => Book, book => book.genreConnection, {primary:
        true})
    @JoinColumn({name: 'book_id'})
    book: Book[];
  
    @ManyToOne(() => Genre,  genre => genre.bookConnection, {primary:
        true})
    @JoinColumn({name: 'genre_id'})
    genre: Genre[];
  }