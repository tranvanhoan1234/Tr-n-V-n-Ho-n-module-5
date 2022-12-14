import {RentalType} from './rental-type';

export interface Facility {
  id?: number;
  serviceName?: string;
  usableArea?: number;
  rentalCosts?: number;
  maxNumberOfPeople?: number;
  roomStandard?: string;
  rentalType?: RentalType;
  otherAmenitiesDescription?: string;
  poolArea?:number;
  ofFloors?: number;
  freeServiceIncluded?: string;
  url?: string;

}
