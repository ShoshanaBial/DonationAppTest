import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { INIT_DONATIONS } from "../config/donation.config";
import { Donation } from "../config/donation.interface";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class DonationService {
    private donationsListSub: BehaviorSubject<Donation[]> = new BehaviorSubject<Donation[]>(INIT_DONATIONS);
    getDonationList$: Observable<Donation[]> = this.donationsListSub.asObservable();

    baseUrl = 'https://localhost:44304/api/';
    constructor(private http: HttpClient) { }
    addDonation(donation: Donation) {

        this.http.post<any>(`${this.baseUrl}Donation`, donation).subscribe(
            data => {
                const existDonationsList = this.donationsListSub.value;
                donation.id = existDonationsList.length + 1;
                existDonationsList.push(donation);
                this.donationsListSub.next(existDonationsList);
            },

            error => {
                console.log(error)
            }
        )

    }

    editDonation(donation: Donation) {
        this.http.post<any>(`${this.baseUrl}Donation`, donation).subscribe(
            data => {
                const { existDonationsList, existIndex } = this.findDonationIndexById(donation.id);
                existDonationsList[existIndex] = donation;
                this.donationsListSub.next(existDonationsList);
            }
            ,

            error => {
                console.log(error)
            }
        )
    }

    showHideDonationForm(id: number ,isDisable:boolean) {
        const { existDonationsList, existIndex } = this.findDonationIndexById(id);
        existDonationsList[existIndex].showForm = !existDonationsList[existIndex].showForm;
        existDonationsList[existIndex].isDisable = isDisable;
        this.donationsListSub.next(existDonationsList);
    }

    deleteDonation(id: number) {
        const { existDonationsList, existIndex } = this.findDonationIndexById(id);
        existDonationsList.splice(existIndex, 1);
        this.donationsListSub.next(existDonationsList);
    }

    private findDonationIndexById(id: number): { existDonationsList: Donation[], existIndex: number } {
        const existDonationsList = this.donationsListSub.value;
        return { existDonationsList, existIndex: existDonationsList.findIndex(item => item.id === id) };
    }

}