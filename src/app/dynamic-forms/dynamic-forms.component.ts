import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ControlBase } from '../commons/interfaces';
import { Textbox } from './textbox';

@Component({
  selector: 'app-dynamic-forms',
  template: `
    <div>
      <h2>Dynamic form of Item {{selectedId}} </h2>
      <div class="dynamic-form">
      <app-dynamic-form [questions]="questions"></app-dynamic-form>
      </div>
    </div>
  `,
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {
  @Input() selectedId: number;
  public questions: ControlBase<string>[] = [];
  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'selectedId': {
            this.generateField(this.selectedId)
          }
        }
      }
    }
  }


  generateField(val) {
    this.questions = [];
    if (val) {
      for (let idx = 0; idx < val * 2; idx++) {
        let newControl = new Textbox({
          key: 'formfield'+idx,
          label: 'Form field' + idx,
          type: 'text',
          order: idx,
          value:''
        })
        this.questions.push(newControl);
      }
    }
  }
}
