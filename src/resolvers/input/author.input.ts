import { Field, InputType } from '@nestjs/graphql';

@InputType()
class AuthorInput {
  @Field()
  readonly name: string;
}

export default AuthorInput;