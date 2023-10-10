import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    static checkFirstAndLastUppercase(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const isFirstUpper = control.value[0] === control.value[0].toUpperCase();
            const isLastUpper = control.value[control.value.length - 1] === control.value[control.value.length - 1].toUpperCase();
            const isValid = isFirstUpper && isLastUpper;

            if (isValid) {
                return null;
            } else {
                return {isFirstUpper: isFirstUpper, isLastUpper: isLastUpper};
            }
        }
    }

    static checkAddressUSA() {
        return (control: AbstractControl): ValidationErrors | null => {
            const validCountryNames = ['usa', 'u.s.a.', 'united states', 'united states of america'];
            const isInArray = validCountryNames.includes(control.value.toLowerCase());
            
            return isInArray ? null: {invalidName: control.value};
        }
    }

    static checkNotMinor() {
        return (control: AbstractControl): ValidationErrors | null => {

            return null;
        }
    }

    static isPasswordValid() {
        return (control: AbstractControl): ValidationErrors | null => {
            // min 0 caratteri,
            // almeno una maiuscola,
            // almeno uno dei nipoti di paperino
            // deve includere almeno due caratteri speciali (!€$?)
            
            return null;
        }
    }
}