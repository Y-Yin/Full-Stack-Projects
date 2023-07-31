import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User,UserSchema } from './schemas/user.schemas';
import { Course, CourseSchema } from './schemas/course.schemas';
import { Episode,EpisodeSchema } from './schemas/episode.schemas';

const models =  MongooseModule.forFeature([
  {name:User.name,schema:UserSchema},
  {name:Course.name,schema:CourseSchema},
  {name:Episode.name,schema:EpisodeSchema}
])
 

// 标记为全局模块
@Global()
@Module({
  imports:[
    MongooseModule.forRoot('mongodb://localhost/nest-video'),
    models
  ],
  providers: [DbService],
  exports: [DbService,models],
})
export class DbModule {}
 