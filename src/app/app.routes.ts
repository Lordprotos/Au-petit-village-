import { Routes } from '@angular/router';
import { Products } from './components/products/products';
import { Home } from './components/home/home';
import { Contact } from './components/contact/contact';
import { About } from './components/about/about';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'products', component: Products },
    { path: 'products/:id', component: Products },
    { path: 'contact', component: Contact },
    { path: 'about', component: About },
    { path: '**', redirectTo: '' }
];
