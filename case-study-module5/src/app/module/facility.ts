import {RentalType} from './rental-type';

export interface Facility {
  idFacility?: number;
  serviceName?: string;
  usableArea?: number;
  rentalCosts?: number;
  maxNumberOfPeople?: number;
  roomStandard?: string;
  rentalType?: RentalType;
  otherAmenitiesDescription?: string;
  ofFloors?: number;
  freeServiceIncluded?: string;
  url?: string;

}
