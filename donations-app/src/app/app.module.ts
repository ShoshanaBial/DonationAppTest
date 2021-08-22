import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DonationFormComponent } from './donations/donation-form/donation-form.component';
import { DonationsListComponent } from './donations/donations-list/donations-list.component';
import { DonationItemComponent } from './donations/donations-list/donation-item/donation-item.component';
import { HttpClientModule } from '@angular/common/http';
import {ErrorMessageComponent} from './donations/donation-form/error-message/error-message.component'

@NgModule({
  declarations: [
    AppComponent,
    DonationFormComponent,
    DonationsListComponent,
    DonationItemComponent,
    ErrorMessageComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    DialogModule,
    PanelModule,
    ButtonModule,
    AccordionModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
