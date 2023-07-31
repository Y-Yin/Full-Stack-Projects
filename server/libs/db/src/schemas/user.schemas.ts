import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from 'mongoose';


export type UserDocument = HydratedDocument<User>;


@Schema({timestamps:true})
export class User {
    @ApiProperty({description:'用户名', example:'user1'})
    @Prop()
    username:string
    

    @ApiProperty({description:'密码', example:'123456'}) 
    @Prop()
    password:string
}

// 创建一个基于mongo 的 user 模型
export const UserSchema = SchemaFactory.createForClass(User);