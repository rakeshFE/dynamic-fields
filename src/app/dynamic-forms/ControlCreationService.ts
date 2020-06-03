import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ControlBase } from '../commons/interfaces';

@Injectable()
export class ControlCreationService {
  constructor() { }

  toFormGroup(controls: ControlBase<string>[]) {
    let group: any = {};

    controls.forEach(control => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
        : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }
}