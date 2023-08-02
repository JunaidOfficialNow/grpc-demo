import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { HeroService } from './hero.service';
import { HeroController } from './hero.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: join(__dirname, '/hero.proto'),
        },
      },
    ]),
  ],
  providers: [HeroService],
  controllers: [HeroController],
})
export class HeroModule {}
