import { Controller, Get, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private heroService: HeroService) {}
  @Get()
  getHero(): Observable<any> {
    return this.heroService.getHero();
  }
}
