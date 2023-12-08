import {Component, Inject} from '@angular/core';
import {TuiBreakpointService, TuiButtonModule, TuiSizeL} from "@taiga-ui/core";
import {async, map, Observable} from "rxjs";
import {TuiBlockStatusModule} from "@taiga-ui/layout";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-constructor',
  standalone: true,
  imports: [
    TuiButtonModule,
    TuiBlockStatusModule,
    AsyncPipe
  ],
  templateUrl: './constructor.component.html',
  styleUrl: './constructor.component.less'
})
export class ConstructorComponent {

  protected readonly async = async;

  size$: Observable<TuiSizeL> = this.breakpointService.pipe(
    map(key => (key === 'mobile' ? 'm' : 'l')),
  );

  constructor(
    @Inject(TuiBreakpointService) readonly breakpointService: TuiBreakpointService,
  ) {}

}
