import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationFormComponent } from './donations/donation-form/donation-form.component';
import { DonationsListComponent } from './donations/donations-list/donations-list.component';


const routes: Routes = [
  { path: 'donationForm', component: DonationFormComponent },
  { path: 'donationsList', component: DonationsListComponent },
  { path: '**', redirectTo: 'donationsList' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
