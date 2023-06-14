import { Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolve{

    @Query(() => String)
    async hello(){
        return 'Hello World'
    }
}