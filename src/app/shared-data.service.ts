import { Injectable } from '@angular/core';

@Injectable()
export class SharedDataService {
  public title: string = 'Initial Title';
  public activeItemIndex: number = 0;
  public choosing_color_items: string = 'red';
}
