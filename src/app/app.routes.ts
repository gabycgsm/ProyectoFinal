import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ContactComponent } from './contact-component/contact-component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        title: "Home"
    },
    {
        path: "contact",
        component: ContactComponent,
        title: "Contacto"
    }
];
