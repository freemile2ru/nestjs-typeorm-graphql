import { Args, Mutation, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import RepoService from '../repo.service';
import Book from '../db/models/book.entity';
import Genre from '../db/models/genre.entity';
import GenreInput from './input/genre.input';



@Resolver(Genre)
class GenreResolver {

  constructor(private readonly repoService: RepoService) {}
  @Query(() => [Genre])
  public async genres(): Promise<Genre[]> {
    return this.repoService.genreRepo.find();
  }
  @Query(() => Genre, {nullable: true})
  public async genre(@Args('id') id: number): Promise<Genre> {
    return this.repoService.genreRepo.findOne(id);
  }

  @Mutation(() => Genre)
  public async createGenre(@Args('data') input: GenreInput): Promise<Genre> {
    const genre = new Genre();
    genre.name = input.name;
    return this.repoService.genreRepo.save(genre);
  }

  @ResolveProperty('books', ()=> [Book])
  public async book(@Parent() parent): Promise<Book[]> {
    const bookGenres = await this.repoService.bookGenreRepo.find({where: 
    {genreId: parent.id}, relations: ['book']});
    const books: any[] = [];
    bookGenres.forEach(async bookGenre => books.push(await 
      bookGenre.book));
    return books;
  }
}

export default GenreResolver;