import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  faHouse = faHouse;
  faPeopleGroup = faPeopleGroup;
  faBars = faBars;
  faXmark = faXmark;

  icon = faBars;

  showMenu: boolean = false;

  @ViewChild('el', { static: true }) element!: ElementRef;

  toggleMenu(event?: any) {
    const newShowMenu = event ? event.target.innerWidth > 768 : !this.showMenu;

    this.showMenu = newShowMenu;

    if (newShowMenu) {
      this.element.nativeElement.style.display = "block";
      this.icon = this.faXmark;
    } else {
      this.element.nativeElement.style.display = "none";
      this.icon = this.faBars;
    }
  }

}
