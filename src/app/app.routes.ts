import { Routes } from '@angular/router';

//COMPONENTS
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CatalogComponent } from './pages/catalog/catalog.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '',
        component: CatalogComponent
    },
    /*
    {
        path: 'product/:productId',
        component: ProductsComponent
    },
    */
  ]
