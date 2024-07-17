import { Pipe, PipeTransform } from '@angular/core';
import { Figurines } from '../Figurines';

@Pipe({
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {

  transform(figure: Figurines[], searchTerm: string): Figurines[] {
	return figure.filter(figure => figure.name.toLocaleLowerCase().includes(searchTerm)); 
}

}
