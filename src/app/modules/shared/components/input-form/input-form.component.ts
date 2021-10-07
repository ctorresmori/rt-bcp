import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent {
  @Input() label = 'LABEL_DEFAULT';
  @Input() control!: FormControl;
  @Input() maxLength!: number;
  @Input() msgErrorRequired!: string;
  @Input() msgErrorMaxLength!: string;
  @Input() msgErrorMinLength!: string;
}
