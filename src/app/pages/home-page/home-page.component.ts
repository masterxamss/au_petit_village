import { Component, ViewChild, ElementRef, AfterViewChecked, ChangeDetectorRef } from '@angular/core';
import { RouterLink  } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

/* Services */
import { ProductsService } from '../../services/products.service';

/* Interface */
import { Figurines } from '../../Figurines';

/* Pipes */
import { FilterByNamePipe } from '../../pipes/filter-by-name.pipe';
import { FilterByTagPipe } from '../../pipes/filter-by-tag.pipe';
import { SortByPricePipe } from '../../pipes/sort-by-price.pipe';

/* Font Awesome */
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    RouterLink,
    FormsModule,
    FilterByNamePipe,
    SortByPricePipe,
    FilterByTagPipe,
    FontAwesomeModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements AfterViewChecked {

  figure: Figurines[] = [];
  searchTerm: string = '';
  sorting: string = '';
  tag: string = '';
  productCount: number = 0;
  faTag = faTag;
  faFaceSadTear = faFaceSadTear;
  faMagnifyingGlass = faMagnifyingGlass;

  @ViewChild('limitedEdition') limitedEdition!: ElementRef;
  @ViewChild('new') new!: ElementRef;
  @ViewChild('divElement') divElement!: ElementRef;
  @ViewChild('notFound') notFound!: ElementRef;
  @ViewChild('input') input!: ElementRef;


  constructor(private productsService: ProductsService, private cdref: ChangeDetectorRef) {
    this.getFigurines();
  }

  //GET ALL PRODUCTS FROM productsService
  getFigurines() {
    this.productsService.getAll().pipe(
      tap(data => {
        // Check if data is an array
        if (Array.isArray(data)) {
          this.figure = data;
        } else {
          console.error('The data received is not a array:', data);
        }
      }),
      catchError(error => {
        console.error('Data loading error', error);
        return of([]); //returns an empty array on error
      })
    ).subscribe();
  }

  getCheckBoxValue() {
    this.tag = '';
    
    if (!this.limitedEdition.nativeElement.checked && this.new.nativeElement.checked) {
        this.tag = this.new.nativeElement.value;
    } else if (this.limitedEdition.nativeElement.checked && !this.new.nativeElement.checked) {
        this.tag = this.limitedEdition.nativeElement.value;
    }
  }

  getInputValue() {
    this.searchTerm = this.input.nativeElement.value;
    console.log('teste');
  }

  ngAfterViewChecked(): void {
    this.productCount = this.divElement.nativeElement.children.length;
    this.cdref.detectChanges();

    this.notFound.nativeElement.style.display = this.productCount === 0 ? 'block' : 'none';
  }



}
