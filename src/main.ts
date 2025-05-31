import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use('/public', express.static(join(__dirname, '..', 'public')));

  app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true, // strips properties that do not have decorators
        forbidNonWhitelisted: true, // throws error if non-whitelisted property is present
        transform: true, // transforms payloads to DTO instances
      }),
    );

  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('API description and docs')
    .setVersion('1.0')
    .addTag('users') // optional
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
