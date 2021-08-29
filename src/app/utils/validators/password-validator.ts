import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

import {CONSTANTS} from './constants';

export class PasswordValidator {
  static validPassword(isRequired: boolean = false): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return isRequired ? {invalidPassword: `required`} : null;
      }
      if (control.value.length < 8) {
        return {invalidPassword: `digit`};
      }
      if (!CONSTANTS.UPPERCASE_CHAR_REGEX.test(control.value)) {
        return {
          invalidPassword: `uppercase`,
        };
      }
      if (!CONSTANTS.DIGIT_REGEX.test(control.value)) {
        return {
          invalidPassword: `numeric`,
        };
      }

      return null;
    };
  }
}

// this is just to show user the strength of password (this is not about for validation)
export class StrengthPasswordValidator {
  static setIndicatorValues(value: string): number {
    let strength = 0;
    let minLength = 0;
    let digit = 0;
    let uppercase = 0;
    let lower = 0;
    let symbol = 0;

    if (value.length < 8) {
      if (minLength !== 0) {
        minLength -= 1;
      }
    } else {
      minLength += 1;
    }
    if (!CONSTANTS.UPPERCASE_CHAR_REGEX.test(value)) {

      if (uppercase !== 0) {
        uppercase -= 1;
      }
    } else {
      uppercase += 1;
    }
    if (!CONSTANTS.DIGIT_REGEX.test(value)) {
      if (digit !== 0) {
        digit -= 1;
      }
    } else {
      digit += 1;
    }
    strength = minLength + digit + uppercase;
    if (strength < 3) {
      return strength;
    }
    if (!CONSTANTS.LOWER_CHAR_REGEX.test(value)) {
      if (lower !== 0) {
        lower -= 1;
      }
    } else {
      lower += 1;
    }
    if (!CONSTANTS.SYMBOL_REGEX.test(value)) {
      if (symbol !== 0) {
        symbol -= 1;
      }
    } else {
      symbol += 1;
    }

    strength = minLength + digit + uppercase + lower + symbol;
    return strength;


  }
}
