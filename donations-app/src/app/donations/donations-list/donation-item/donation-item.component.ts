import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { faTrashAlt, faPencilAlt, faChevronDown ,faChevronUp} from '@fortawesome/free-solid-svg-icons';
import { Donation } from '../../config/donation.interface';
import { DonationService } from '../../services/donation.service';

@Component({
  selector: 'app-donation-item',
  templateUrl: './donation-item.component.html',
  styleUrls: ['./donation-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonationItemComponent implements OnInit {

  @Input() donation!: Donation;

  faTrashAlt = faTrashAlt;
  faPencilAlt = faPencilAlt;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  faChevron = faChevronDown;

  constructor(
    private donationsService: DonationService
  ) { }

  ngOnInit(): void {
  }

  editDonation(isDisable:boolean){
    this.faChevron = this.faChevron == faChevronUp ? faChevronDown :  faChevronUp;
    this.donationsService.showHideDonationForm(this.donation.id,isDisable);
  }
  
  deleteDonation(){
    this.donationsService.deleteDonation(this.donation.id);
  }

}
