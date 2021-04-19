import { Field, InputType } from '@nestjs/graphql';

@InputType()
class GenreInput {
  @Field()
  readonly name: string;
}
export default GenreInput;