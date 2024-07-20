import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuValue: boolean = false;
  menu_icon: string = "bi bi-list";

  Menu(){
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? "bi bi-x" : "bi bi-list";

     
  }
}
