import { AbstractControl, ValidatorFn } from '@angular/forms';

export function postcodeValidator(): ValidatorFn {
  return (
    control: AbstractControl
  ): { [key: string]: { value: string } } | null => {
    const postcodePatter = /^\d{2}-\d{3}$/;
    const value = control.value;

    if (!value || postcodePatter.test(value)) return null;
    return { invalidPostcode: { value } };
  };
}
