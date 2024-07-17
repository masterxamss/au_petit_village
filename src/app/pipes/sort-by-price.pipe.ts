import { Figurines } from '../Figurines';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {

  transform(value: Figurines[], sorting: string): Figurines[] {
    return value.sort((a, b) =>{
      if (sorting === "asc") {
        return a.price - b.price;
      } else if (sorting === "desc") {
        return b.price - a.price;
      }
      return 0;
    });
  }
}
