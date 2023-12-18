import { Component } from '@angular/core';
import {SharedDataService} from "../shared-data.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {
  constructor(private sharedData: SharedDataService) {
    console.log(this.sharedData.title);
    console.log(this.sharedData.activeItemIndex);
  }
}
