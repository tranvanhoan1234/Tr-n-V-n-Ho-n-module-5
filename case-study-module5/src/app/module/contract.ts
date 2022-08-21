import {Customer} from './customer';
import {Facility} from './facility';

export interface Contract {
  idContract?: number;
  customer?: Customer;
  facility?: Facility;
  contractDate?: string;
  contractEndDate?: string;
  deposits?: string;

}
