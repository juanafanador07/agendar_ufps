import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function hourValidator(): ValidatorFn {
    return (control:AbstractControl) : ValidationErrors | null => {

        const value = control.value;

        if (!value) {
            return null;
        }

        const hours = Number.parseInt(value.split(":")[0]);
        const minutes =  Number.parseInt(value.split(":")[1]);

        const areNumbers = Number.isNaN(hours) || Number.isNaN(minutes);

        const validHours = hours >= 0 && hours < 24;

        const validMinutes = minutes >= 0 && minutes < 60;

        const valid = validHours && validMinutes;

        return !valid ? {incorrectFormat:true}: null;
    }
}