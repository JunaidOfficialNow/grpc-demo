import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const grpcOptions: MicroserviceOptions = {
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, 'hero/hero.proto'),
    },
  };
  app.connectMicroservice(grpcOptions);
  app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
