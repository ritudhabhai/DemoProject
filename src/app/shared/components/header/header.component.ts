import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { URLConstants } from '../../../common/constants/routerLink-constants';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styles: [],
})
export class HeaderComponent implements OnInit {
	URLConstants = URLConstants;
	constructor(public router: Router) {
	}

	ngOnInit() { }
}
