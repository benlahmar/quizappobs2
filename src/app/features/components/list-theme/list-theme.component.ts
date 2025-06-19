import { Component } from '@angular/core';
import { themes } from '../../../core/data/themes';
import { ThemeComponent } from "../theme/theme.component";
import { PaginationComponent } from "../../../share/components/pagination/pagination.component";

@Component({
  selector: 'obs-list-theme',
  imports: [ThemeComponent, PaginationComponent],
  templateUrl: './list-theme.component.html',
  styleUrl: './list-theme.component.css'
})
export class ListThemeComponent {

  p:number=0;
  datatheme=themes;


  getp(x:any)
  {
    console.log(x)
    this.p=x*3
  }
}

