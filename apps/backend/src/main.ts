/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  if (process.env.NODE_ENV === 'production') {
    app.enableCors({
      origin: [
        'https://hyperxq.github.io/applaudify',
        'https://hyperxq.github.io',
      ],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    });
  } else {
    app.enableCors(); // Enable CORS for all origins in development
  }
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
