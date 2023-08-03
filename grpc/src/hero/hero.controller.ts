import { Controller, Get, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HeroService } from './hero.service';

@Controller('hero')
export class HeroController {
  constructor(private heroService: HeroService) {}
  @Get()
  getHero(): Observable<any> {
    const result = this.heroService.getHero();
    console.log(result.subscribe((value) => console.log(value)));
    return result;
  }
}
