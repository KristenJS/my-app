import { Pipe, PipeTransform} from '@angular/core';
import { Game } from '../shared/mock-games';

@Pipe({
  name: 'searchFilter2'
})
export class GamePipe implements PipeTransform {
  transform(value: Game[], query: string): Game[] {
      return value.filter(el => el.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  }
}