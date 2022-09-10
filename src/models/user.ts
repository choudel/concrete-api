import { Field, Int, ObjectType } from "@nestjs/graphql";
import { IsOptional } from "class-validator";

@ObjectType()
export class User{
    @Field()
    userId:string;
    @Field()
    email:string;
    @Field(()=>Int)
    age:number;
    @Field({nullable:true})
    @IsOptional()
    isSubscribed:boolean
}