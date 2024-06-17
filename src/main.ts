import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  const configService = app.get(ConfigService);
  const env: string = configService.get<string>('app.appEnv');
  const appName: string = configService.get<string>('app.appName');

  const config = new DocumentBuilder()
    .setTitle('Final Project')
    .setDescription('The Futsal Management API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(
    configService.get('app.port.api'),
    configService.get('app.host'),
  );
  const appUrl = await app.getUrl();
  console.log(`\n`);
  console.log(`APP NAME\t: ${appName}`);
  console.log(`ENVIRONMENT\t: ${env}`);
  console.log(`RUNNING ON \t: ${appUrl}`);
  console.log(`SWAGGER URL \t: ${appUrl}/docs`);
}
bootstrap();
