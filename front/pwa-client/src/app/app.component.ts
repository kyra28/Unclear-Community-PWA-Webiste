import { Component } from '@angular/core';
import {Router} from "@angular/router";
declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwa-client';
  ngOnInit() {
    $('body').addClass('df');
  }
  constructor(public router: Router){}
}
