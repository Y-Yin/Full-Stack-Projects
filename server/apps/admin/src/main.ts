import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AdminModule); 

  const config = new DocumentBuilder()
    .setTitle('网站后台管理系统')
    .setDescription('api文档')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  console.log(`http://localhost:3000/api-docs`)
  await app.listen(3000); 
  
}
bootstrap();
