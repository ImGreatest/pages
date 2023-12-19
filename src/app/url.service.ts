import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  constructor(private router: Router) { }

  getCurrentUrl() {
    return this.router.url;
  }
}
