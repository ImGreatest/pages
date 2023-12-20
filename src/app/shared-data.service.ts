import {Injectable} from '@angular/core';

@Injectable()
export class SharedDataService {
  public title: string = 'Initial Title';
  public activeItemIndex: number = 0;
  public choosing_color_items: string = 'red';
  public first_label: string = '';
  public second_label: string = '';
  public third_label: string = '';
  public first_desc: string = '';
  public second_desc: string = '';
  public third_desc: string = '';
}
