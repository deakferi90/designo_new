import { Routes } from '@angular/router';
import { OurCompany } from './our-company/our-company';
import { Locations } from './locations/locations';
import { Contact } from './contact/contact';

export const routes: Routes = [
  {
    path: 'our-company',
    component: OurCompany,
  },
  {
    path: 'locations',
    component: Locations,
  },
  {
    path: 'contact',
    component: Contact,
  },
  { path: '**', redirectTo: '/our-company' },
];
