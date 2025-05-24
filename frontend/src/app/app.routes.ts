import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    {
        path: 'expos', 
        loadComponent: () => import("./components/exposition/exposition.component")
        .then(c => c.ExpositionComponent)
    },
    {
        path: 'virtual-tour', 
        loadComponent: () => import("./components/virtual-visit/virtual-visit.component")
        .then(c => c.VirtualVisitComponent)
    },
    {
        path: 'contact', 
        loadComponent: () => import("./components/contact/contact.component")
        .then(c => c.ContactComponent)
    }
];
