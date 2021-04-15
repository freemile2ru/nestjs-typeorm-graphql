import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany, PrimaryGeneratedColumn,
  } from 'typeorm';
  import BookGenre from './book-genre.entity';
  import { ObjectType, Field } from '@nestjs/graphql';
  
  @ObjectType()
  @Entity()
  export default class Genre {
  
    @Field()
    @PrimaryGeneratedColumn()
    id: number;
  
    @Field()
    @Column({name: 'genre_name'})
    name: string;
  
    @Field()
    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
  
    @Field()
    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
  
    // Associations
    @OneToMany(() => BookGenre, bookGenre => bookGenre.book)
    bookConnection: Promise<BookGenre[]>;
  }