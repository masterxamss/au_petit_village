import { Routes } from '@angular/router';

//COMPONENTS
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'product/:productId',
        component: ProductComponent
    }
  ]
