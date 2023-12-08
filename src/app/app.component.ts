import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiAlertService,
  TuiSvgModule, TuiModeModule, TuiGroupModule
} from "@taiga-ui/core";
import {Component, Inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TuiAvatarModule, TuiInputCountModule, TuiTabsModule} from "@taiga-ui/kit";
import {FormsModule} from "@angular/forms";
import {ProfileUserComponent} from "./profile-user/profile-user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TuiRootModule, TuiDialogModule, TuiAlertModule, TuiTabsModule, TuiSvgModule, FormsModule, TuiInputCountModule, TuiModeModule, TuiAvatarModule, TuiGroupModule, ProfileUserComponent, RouterLinkActive, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})

export class AppComponent {
  title = 'pages';
  sizeAvatar = "m";
  activeItemIndex = 0;

  constructor(
    @Inject(TuiAlertService)
    private router: Router, readonly alerts: TuiAlertService,
  ) {}

  navigateToHome() {
    this.router.navigate(['']);
  }

}
