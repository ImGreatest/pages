import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { SharedDataService } from "./shared-data.service";
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
import {TuiAvatarModule, TuiInputCountModule, TuiMarkerIconModule, TuiTabsModule} from "@taiga-ui/kit";
import {FormsModule} from "@angular/forms";
import {ProfileUserComponent} from "./profile-user/profile-user.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TuiRootModule, TuiDialogModule, TuiAlertModule, TuiTabsModule, TuiSvgModule, FormsModule, TuiInputCountModule, TuiModeModule, TuiAvatarModule, TuiGroupModule, ProfileUserComponent, RouterLinkActive, RouterLink, TuiMarkerIconModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
  providers: [SharedDataService, {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
})

export class AppComponent {
  title = 'pages';
  activeItemIndex = 0;
  isShow = false;
  openSideBar = false;

  constructor(
    private sharedData: SharedDataService,
    @Inject(TuiAlertService)
    private router: Router, readonly alerts: TuiAlertService,
  ) {
    this.sharedData.title = 'pages';
    this.sharedData.activeItemIndex = 0;
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

}
