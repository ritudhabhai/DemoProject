import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

// Constants
import { URLConstants } from '../../constants/routerLink-constants';
import { MetaConstants } from '../../constants/meta-data-constants';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {
  URLConstants = URLConstants;
  MetaConstants = MetaConstants;

  constructor(private title: Title, private meta: Meta) { }

  /******************************************************************
  @PURPOSE      : Set Meta Title, Keywords & Description Dynamically
  @PARAMETERS   : page
  @RETURN       : Meta Title, Keywords & Description
/******************************************************************/
  setMetaData(page) {
    if (page === this.URLConstants.ABOUT) {
      this.title.setTitle(this.MetaConstants.meta_data_about.title);
      this.meta.updateTag({ name: 'keywords', content: this.MetaConstants.meta_data_about.keywords });
      this.meta.updateTag({ name: 'description', content: this.MetaConstants.meta_data_about.description });
    } else if (page === this.URLConstants.CONTACT) {
      this.title.setTitle(this.MetaConstants.meta_data_contact.title);
      this.meta.updateTag({ name: 'keywords', content: this.MetaConstants.meta_data_contact.keywords });
      this.meta.updateTag({ name: 'description', content: this.MetaConstants.meta_data_contact.description });
    } else if (page === this.URLConstants.SERVICE) {
      this.title.setTitle(this.MetaConstants.meta_data_service.title);
      this.meta.updateTag({ name: 'keywords', content: this.MetaConstants.meta_data_service.keywords });
      this.meta.updateTag({ name: 'description', content: this.MetaConstants.meta_data_service.description });
    } else if (page === this.URLConstants.HOMEPAGE) {
      this.title.setTitle(this.MetaConstants.meta_data_home.title);
      this.meta.updateTag({ name: 'keywords', content: this.MetaConstants.meta_data_home.keywords });
      this.meta.updateTag({ name: 'description', content: this.MetaConstants.meta_data_home.description });
    }
  }
  /******************************************************************/
}
