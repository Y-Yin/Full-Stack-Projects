import { User, UserSchema } from '@libs/db/schemas/user.schemas';
import { Controller, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ApiTags } from '@nestjs/swagger';
import { Crud } from 'nestjs-mongoose-crud';

@Crud({
    model:User 
})
@Controller('users')
@ApiTags('用户')
export class UsersController {
    constructor(@InjectModel(User.name) private readonly model){}
}
