import {Customer} from '../../customer/module/customer';
import {Facility} from '../../facility/module/facility';

export interface Contract {
  idContract?: number;
  customer?: Customer;
  facility?: Facility;
  contractDate?: string;
  contractEndDate?: string;
  deposits?: string;

}
