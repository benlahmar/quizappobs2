import { Component, Input } from '@angular/core';

@Component({
  selector: 'obs-theme',
  imports: [],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {

  @Input()
  tdata:any
}
