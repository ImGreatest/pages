import { Component } from '@angular/core';
import {TuiButtonModule, TuiHintModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {TuiInputModule, TuiInputPasswordModule} from "@taiga-ui/kit";
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-profile-user',
  standalone: true,
  imports: [
    TuiHintModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiInputPasswordModule,
    TuiButtonModule
  ],
  templateUrl: './profile-user.component.html',
  styleUrl: './profile-user.component.less'
})
export class ProfileUserComponent {}
