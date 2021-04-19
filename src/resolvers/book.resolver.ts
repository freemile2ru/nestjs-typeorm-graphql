import {  Parent, ResolveProperty, Resolver } from '@nestjs/graphql';
import Author from '../db/models/author.entity';
import RepoService from '../repo.service';

@Resolver(Author)
class BookResolver {
    constructor(private readonly repoService: RepoService) { }
    
    @ResolveProperty('author', () => Author)
    public async author(@Parent() parent): Promise<Author> {
      return this.repoService.authorRepo.findOne(parent.authorId);
    }
}
export default BookResolver;
