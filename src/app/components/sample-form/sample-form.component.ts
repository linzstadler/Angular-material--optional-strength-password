import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordValidator} from '../../utils/validators/password-validator';
import {ConfirmedPasswordValidator} from '../../utils/validators/confirmed-password-validator.validator';

@Component({
    selector: 'app-sample-form',
    templateUrl: './sample-form.component.html',
    styleUrls: ['./sample-form.component.sass']
})
export class SampleFormComponent implements OnInit {
    public changePassword: FormGroup;

    get getControl(): { [key: string]: AbstractControl } {
        return this.changePassword.controls;
    }

    constructor(private formBuilder: FormBuilder) {
        this.changePassword = this.formBuilder.group({
            old_password: new FormControl('', [
                Validators.required
            ]),
            new_password: new FormControl('', [
                Validators.required,
                Validators.compose([PasswordValidator.validPassword(true)]),
            ]),
            passwordMin: new FormControl({value: false, disabled: true}), // strength password
            passwordDigit: new FormControl({value: false, disabled: true}), // strength password
            passwordSpecial: new FormControl({value: false, disabled: true}), // strength password
            confirm_password: new FormControl('', [
                Validators.required,
            ]),

        }, {
            validators: ConfirmedPasswordValidator('new_password', 'confirm_password')
        });
    }

    ngOnInit(): void {
    }

    public changePasswordHandler() {
        alert('Form submitted successfully');
    }
}
