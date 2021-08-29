import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StrengthPasswordValidator} from '../../utils/validators/password-validator';

@Component({
  selector: 'app-strength-password',
  templateUrl: './strength-password.component.html',
  styleUrls: ['./strength-password.component.sass']
})
export class StrengthPasswordComponent implements OnInit, OnChanges {
  @Input() value: string;
  public strength = 0;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value) {
      this.strength = StrengthPasswordValidator.setIndicatorValues(changes.value.currentValue);
    }
  }

  constructor() { }

  ngOnInit(): void { }

}
