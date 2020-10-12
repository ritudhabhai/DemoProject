import { Component, OnInit } from '@angular/core';

// Constants
import { URLConstants } from '../../common/constants/routerLink-constants';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {
  URLConstants = URLConstants;

  constructor() { }

  ngOnInit() {}


}
