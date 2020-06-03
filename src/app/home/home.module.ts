import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DynamicFormsComponent } from '../dynamic-forms/dynamic-forms.component';
import { DynamicFormComponent } from '../dynamic-forms/dynamic-form-component';
import { DynamicFormQuestionComponent } from '../dynamic-forms/dynamic-form-question/dynamic-form-question.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [HomeComponent, DynamicFormsComponent,
    DynamicFormComponent, DynamicFormQuestionComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, MatDialogModule
  ]
})
export class HomeModule { }
