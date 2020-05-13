import { Component, OnInit } from '@angular/core';

// Constants
import { URLConstants } from '../../common/constants/routerLink-constants';

// Service
import { MetaDataService } from '../../common/services/service/meta-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [
  ]
})
export class ContactComponent implements OnInit {
  URLConstants = URLConstants;

  constructor(private metaDataService: MetaDataService) { }

  ngOnInit() {
    this.metaDataService.setMetaData(this.URLConstants.CONTACT);
  }

}
