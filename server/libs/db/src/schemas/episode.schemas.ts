import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { HydratedDocument } from 'mongoose';


export type EpisodeDocument = HydratedDocument<Episode>;


@Schema({timestamps:true})
export class Episode {
    @ApiProperty({description:'课时名称'})
    @Prop() 
    name:string

    @ApiProperty({description:'课时文件'})
    @Prop()
    file:string



}

// 创建一个基于mongo 的 user 模型
export const EpisodeSchema = SchemaFactory.createForClass(Episode);