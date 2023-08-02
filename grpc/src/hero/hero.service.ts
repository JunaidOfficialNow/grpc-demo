import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';

@Injectable()
export class HeroService implements OnModuleInit {
  private heroService: any;

  constructor(@Inject('HERO_PACKAGE') private client: ClientGrpc) {}
  onModuleInit() {
    this.heroService = this.client.getService('HeroesService');
  }

  getHero(): Observable<any> {
    return this.heroService.findOne({ id: 1 });
  }
}
