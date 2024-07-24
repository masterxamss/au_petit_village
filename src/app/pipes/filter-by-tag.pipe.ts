import { Pipe, PipeTransform } from '@angular/core';
import { Figurines } from '../Figurines';

@Pipe({
  name: 'filterByTag',
  standalone: true
})
export class FilterByTagPipe implements PipeTransform {

  transform(figure: Figurines[], tag: string): Figurines[] {
    return figure.filter(figure => figure.tag.includes(tag)); 
  }
}
