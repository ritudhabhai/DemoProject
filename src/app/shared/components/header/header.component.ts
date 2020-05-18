import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Constants
import { URLConstants } from '../../../common/constants/routerLink-constants';

// Service
import { LocalStorageService } from '../../../common/services/service/local-storage.service';
import { LogoutService } from '../../../common/services/service/logout.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styles: [],
})
export class HeaderComponent implements OnInit {
	URLConstants = URLConstants;
	constructor(public router: Router, public localStorageService: LocalStorageService, public logoutService: LogoutService) {
	}

	ngOnInit() { }
}
