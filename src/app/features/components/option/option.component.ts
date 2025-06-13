import { Component, Input } from '@angular/core';
import { Option } from '../../../core/models/option';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'obs-option',
  imports: [FormsModule],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {

  @Input()
  odata:Option;
  @Input()
  modedisplay:string; // Default display mode
}
