import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Donation } from '../config/donation.interface';
import { Observable } from 'rxjs';
import { DonationService } from '../services/donation.service';

@Component({
  selector: 'app-donations-list',
  templateUrl: './donations-list.component.html',
  styleUrls: ['./donations-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonationsListComponent implements OnInit {

  donationsList$!: Observable<Donation[]>;
  donationDialog = false;

  constructor(
    private donationsService: DonationService
  ) { }

  ngOnInit(): void {
    this.donationsList$ = this.donationsService.getDonationList$;
  }

  trackByDonation(index: number, donation: Donation) { donation }

  addDonation(): void {
  this.donationDialog = true;
  }
  hideDialog() {
    this.donationDialog = false;
  }

}
