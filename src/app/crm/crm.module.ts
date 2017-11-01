import { NgModule } from '@angular/core';

import { CrmRouting } from './crm.routing';

import { CrmComponent } from './crm.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [
    CrmComponent,
    CustomersComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CrmRouting
  ],
  providers: []
})
export class CrmModule {}
