import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TuiButtonModule, TuiHintModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {TuiInputModule, TuiInputPasswordModule, TuiSelectModule} from "@taiga-ui/kit";

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiHintModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiSelectModule,
    TuiTextfieldControllerModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.less'
})
export class RegistrationComponent {

}
