import { Pipe, PipeTransform} from '@angular/core';
import { Friend } from '../shared/Friend';

@Pipe({
  name: 'searchFilter'
})
export class FriendPipe implements PipeTransform {
  transform(value: Friend[], query: string): Friend[] {
      return value.filter(el => el.userName.toLocaleLowerCase().includes(query.toLocaleLowerCase()))
  }
}