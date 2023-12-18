import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {TuiButtonModule, TuiHintModule, TuiTextfieldControllerModule} from "@taiga-ui/core";
import {
  TUI_PASSWORD_TEXTS,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputPasswordModule,
  tuiInputPasswordOptionsProvider
} from "@taiga-ui/kit";
import {of} from "rxjs";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiHintModule,
    TuiInputDateModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiTextfieldControllerModule
  ],
  providers: [
    tuiInputPasswordOptionsProvider({
      icons: {
        hide: "tuiIconUnlockLarge",
        show: "tuiIconLockLarge"
      },
    }),
    {
      provide: TUI_PASSWORD_TEXTS,
      useValue: of(['']),
    }
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less'
})
export class LoginComponent {
  passwordForm = new FormGroup({
    passwordValue: new FormControl('password', Validators.required)
  })
}
