import { Validators } from "@angular/forms";
import { Donation, DropdownItem } from "./donation.interface";

export const INIT_DONATIONS: Donation[] = [
    { id: 1, foreignPoliticalEntityName: 'ישות A', amountNIS: 100, foreignPoliticalEntityTypeCode: 1, destination: 'aaa', conditions: 'AAA', currencyTypeCode: 1, exchangeRate: 1 },
    { id: 2, foreignPoliticalEntityName: 'ישות B', amountNIS: 200, foreignPoliticalEntityTypeCode: 1, destination: 'bbb', conditions: 'BBB', currencyTypeCode: 2, exchangeRate: 2 },
    { id: 3, foreignPoliticalEntityName: 'ישות C', amountNIS: 300, foreignPoliticalEntityTypeCode: 1, destination: 'ccc', conditions: 'CCC', currencyTypeCode: 3, exchangeRate: 3 },
    { id: 4, foreignPoliticalEntityName: 'ישות D', amountNIS: 400, foreignPoliticalEntityTypeCode: 1, destination: 'ddd', conditions: 'DDD', currencyTypeCode: 4, exchangeRate: 4 },
]

export const FOREIGN_POLITICAL_ENTITY_TYPE_LIST: DropdownItem[] = [
    { label: 'סוג מדינה זרה 1 ', value: 1 },
    { label: 'סוג מדינה זרה 2 ', value: 2 },
    { label: 'סוג מדינה זרה 3 ', value: 3 },
    { label: 'סוג מדינה זרה 4 ', value: 4 }
];

export const CURRENCY_TYPE_LIST: DropdownItem[] = [
    { label: 'אירו', value: 1 },
    { label: 'דולר ארצות הברית', value: 4 },
    { label: 'לירה שטרלינג', value: 3 },
    { label: 'שקל', value: 2 },
  
    
];

export const DONATION_FORM_FIELDS = [
    { key: 'id', label: 'מזהה', validators: [], controlType: 'input' ,isHidden: 'true'},
    { key: 'foreignPoliticalEntityName', label: 'שם היישות המדינית הזרה', validators: [Validators.required,Validators.pattern("^[A-Za-z\u0590-\u05FF ,.'-]+$")], controlType: 'input' ,class:'p-col-3'},
    { key: 'amountNIS', label: 'סכום התרומה בש"ח',  validators: [Validators.required], controlType: 'input', type: 'number' ,class:'p-col-3' },
    { key: 'foreignPoliticalEntityTypeCode', label: 'סוג היישות המדינית הזרה',  validators: [Validators.required], controlType: 'dropdown', options: FOREIGN_POLITICAL_ENTITY_TYPE_LIST ,class:'p-col-6'},
    { key: 'destination', label: 'ייעוד התרומה',  validators: [Validators.required,Validators.pattern("^[A-Za-z\u0590-\u05FF ,.'-]+$")], controlType: 'input' ,class:'p-col-12'  },
    { key: 'conditions', label: 'התנאים לתרומה', validators: [Validators.pattern("^[A-Za-z\u0590-\u05FF ,.'-]+$")], controlType: 'input'  ,class:'p-col-12'},
    { key: 'currencyTypeCode', label: 'סוג המטבע', validators: [Validators.required], controlType: 'dropdown', options: CURRENCY_TYPE_LIST ,class:'p-col-3'},
    { key: 'exchangeRate', label: 'שער המרה',  validators: [Validators.required, Validators.min(1), Validators.pattern("^[0-9]+(\.[0-9]{1,10})?$")], controlType: 'input', type: 'number' ,class:'p-col-3' },



]

export const  ERROR_MESSAGE_MAP = {
    required: () => 'שדה חובה',
    pattern:() =>  'תווים בעברית ובאנגלית בלבד',
    min:() => 'ערך מינימלי 1'
  };