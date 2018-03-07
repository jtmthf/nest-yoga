import { Query, Resolver } from 'nest-yoga';

@Resolver()
export class HelloResolver {
  @Query()
  public hello(_: void, { name }: { name: string }) {
    return `Hello ${name || 'World'}`;
  }
}
