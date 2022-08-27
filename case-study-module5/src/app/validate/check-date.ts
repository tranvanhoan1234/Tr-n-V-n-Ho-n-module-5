import {formatDate} from '@angular/common';
import {AbstractControl} from '@angular/forms';
export function checkDate(control: AbstractControl) {
  const date = new Date(control.value);
  if (new Date().getTime() - (date.getTime() + 18 * 365 * 24 * 60 * 60 * 1000) < 0) {
    return {customerBirthday: true};
  } else {
    return null;
  }
}
