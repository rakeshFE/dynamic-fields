import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormsRoutingModule } from './dynamic-forms-routing.module';
import { DynamicFormsComponent } from './dynamic-forms.component';
import { DynamicFormComponent } from './dynamic-form-component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [DynamicFormsComponent, DynamicFormComponent, DynamicFormQuestionComponent],
  imports: [
    CommonModule,
    DynamicFormsRoutingModule,
    ReactiveFormsModule, FormsModule
  ]
})
export class DynamicFormsModule { }
