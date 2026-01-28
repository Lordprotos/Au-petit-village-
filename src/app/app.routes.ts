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
    // Pages légales
    { 
        path: 'mentions-legales', 
        loadComponent: () => import('./components/legal/mentions-legales/mentions-legales').then(m => m.MentionsLegales) 
    },
    { 
        path: 'donnees-personnelles', 
        loadComponent: () => import('./components/legal/donnees-personnelles/donnees-personnelles').then(m => m.DonneesPersonnelles) 
    },
    { 
        path: 'accessibilite', 
        loadComponent: () => import('./components/legal/accessibilite/accessibilite').then(m => m.Accessibilite) 
    },
    { 
        path: 'cookies', 
        loadComponent: () => import('./components/legal/cookies/cookies').then(m => m.Cookies) 
    },
    { path: '**', redirectTo: '' }
];
