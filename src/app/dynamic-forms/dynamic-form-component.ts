import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ControlCreationService } from './ControlCreationService';
import { ControlBase } from '../commons/interfaces';


@Component({
    selector: 'app-dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [ControlCreationService]
})
export class DynamicFormComponent {

    @Input() questions: ControlBase<string>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: ControlCreationService) { }

    ngOnChanges() {
        this.payLoad = '';
        this.form = this.qcs.toFormGroup(this.questions);
    }

    onSubmit(event) {
        event.preventDefault();
        this.payLoad = '';
        this.payLoad = JSON.stringify(this.form.value);
    }

    reset() {
        event.preventDefault();
        this.form.markAsPristine();
        this.form.markAsUntouched();
        this.payLoad = '';
    }
}