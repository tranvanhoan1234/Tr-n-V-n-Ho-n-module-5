import {formatDate} from '@angular/common';
import {AbstractControl} from '@angular/forms';
export function checkDate(control: AbstractControl) {
  const value = control.value;
  const curDate = formatDate(new Date(), 'dd-MM-yyyy', 'en-US');
  if (value >= curDate) {
    return {'checkDate': true};
  }
  return null;
}
