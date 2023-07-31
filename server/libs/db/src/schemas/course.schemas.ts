import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import mongoose, { HydratedDocument } from 'mongoose';
import { Episode } from "./episode.schemas";


export type CourseDocument = HydratedDocument<Course>;


@Schema({timestamps:true})
export class Course {
    @ApiProperty({description:'课程名称'})
    @Prop() 
    name:string

    @ApiProperty({description:'封面图'})
    @Prop() 
    cover:string

    // 一个课程有多个课时
    @ApiProperty({description:'课时', example:[]})
    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Episode' }] }) 
    episodes: Episode[]

}

// 创建一个基于mongo 的 user 模型
export const CourseSchema = SchemaFactory.createForClass(Course); 