import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomersComponent} from './customers/customers.component';
import {CrmComponent} from './crm.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

/*
const crmRoutes: Routes = [
  {path: 'crm', component: CrmComponent},
  {path: 'crm/detail/:id', component: CustomerDetailsComponent},
  {path: 'crm/customers', component: CustomersComponent}
];
 *  * */

const crmRoutes: Routes = [
  { path: 'crm', component: CrmComponent,
    children: [
      {path: '', component: CrmComponent},
      {path: 'detail', component: CustomerDetailsComponent, outlet: 'crmoutlet'},
      {path: 'customers', component: CustomersComponent, outlet: 'crmoutlet'}
    ]
  }
];
export const CrmRouting = RouterModule.forChild(crmRoutes);
