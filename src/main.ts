import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 8080);
  console.log("This change should reflect on workflows")
  console.log("Change number: ", 2)
  console.log(`Application is running on: ${await app.getUrl()}`);

}
bootstrap();
