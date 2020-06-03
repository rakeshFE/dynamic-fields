import { ControlBase } from './../../commons/interfaces';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() question: ControlBase<string>;
  @Input() form: FormGroup;
  get isValid() { return true; }
}