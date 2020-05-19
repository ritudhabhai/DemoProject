import { Component, OnInit } from '@angular/core';

// Constants
import { URLConstants } from '../../common/constants/routerLink-constants';

// Service
import { MetaDataService } from '../../common/services/service/meta-data.service';
import { LocalStorageService } from '../../common/services/service/local-storage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {
  URLConstants = URLConstants;

  constructor(private metaDataService: MetaDataService, public localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.metaDataService.setMetaData(this.URLConstants.HOMEPAGE);
  }


}
