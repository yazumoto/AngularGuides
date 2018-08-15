import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
import { Directive, Input } from '@angular/core';

export function forbiddenWordValidator(word: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = control.value.includes(word);
    return forbidden ? {'forbiddenWord': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenWord]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenWordValidatorDirective, multi: true}]
})
export class ForbiddenWordValidatorDirective implements Validator {
  @Input('appForbiddenWord') forbiddenWord: string;

  validate(control: AbstractControl): {[key: string]: any} | null {
    return this.forbiddenWord ? forbiddenWordValidator(this.forbiddenWord)(control)
      : null;
  }
}
