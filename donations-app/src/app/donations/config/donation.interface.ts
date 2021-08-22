export interface Donation {
    id:number;
    foreignPoliticalEntityName: string;
    amountNIS: number;
    foreignPoliticalEntityTypeCode:number;
    destination: string;
    conditions?:string;
    currencyTypeCode:number;
    exchangeRate : number;
    creatorName?:string;
    showForm?: boolean;
    isDisable?: boolean;
  }

export interface DropdownItem {
  label: string;
  value: number;
}