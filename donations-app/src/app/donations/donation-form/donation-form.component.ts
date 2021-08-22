import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CURRENCY_TYPE_LIST, DONATION_FORM_FIELDS, FOREIGN_POLITICAL_ENTITY_TYPE_LIST } from '../config/donation.config';
import { Donation } from '../config/donation.interface';
import { DonationService } from '../services/donation.service';

@Component({
  selector: 'app-donation-form',
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonationFormComponent {

  readonly formFields = DONATION_FORM_FIELDS;

  @Input() donation: Donation | undefined;
  isInsertMode = true;

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private donationsService: DonationService,
    private cdr: ChangeDetectorRef
  ) {
    this.createForm();
  }
  createForm() {
    const formFields = this.formFields.reduce((obj, field) => 
      ({...obj, [field.key]: [null ,field.validators]}), {}
      )
    this.form = this.formBuilder.group(formFields);
  }

  controlIsRequired(control: AbstractControl): boolean{
    const validators = control.validator!({} as AbstractControl);
    return validators && validators.required;
  }

  ngAfterViewInit() {
    this.isInsertMode = !this.donation;
    this.form.patchValue(this.donation || {});
    this.cdr.detectChanges();
    if(this.donation?.isDisable)
      this.form.disable();

    
       
  }

  onSubmit() {
    if (this.isInsertMode) {
      //לשלוח לסרבר וכשחוזר אז לעשות הוספת קליינט
      this.donationsService.addDonation(this.form.value as Donation);
    }
    else {
      //לשלוח לסרבר וכשחוזר אז לעשות הוספת קליינט
      this.donationsService.editDonation(this.form.value as Donation);
    }


  }
  cleanForm() {
    this.form.reset();
  }



}


