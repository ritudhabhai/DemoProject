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
      this.setMeta(
        this.MetaConstants.meta_data_about.title,
        this.MetaConstants.meta_data_about.keywords,
        this.MetaConstants.meta_data_about.description);
    } else if (page === this.URLConstants.CONTACT) {
      this.setMeta(
        this.MetaConstants.meta_data_contact.title,
        this.MetaConstants.meta_data_contact.keywords,
        this.MetaConstants.meta_data_contact.description);
    } else if (page === this.URLConstants.SERVICE) {
      this.setMeta(
        this.MetaConstants.meta_data_service.title,
        this.MetaConstants.meta_data_service.keywords,
        this.MetaConstants.meta_data_service.description);
    } else if (page === this.URLConstants.HOMEPAGE) {
      this.setMeta(
        this.MetaConstants.meta_data_home.title,
        this.MetaConstants.meta_data_home.keywords,
        this.MetaConstants.meta_data_home.description);
    }
  }
  /******************************************************************/

  /***********************************************************************
  @PURPOSE      : Common Function to Set Meta Title, Keywords & Description
  @PARAMETERS   : metaTitle, metaKeywords, metaDescription
  @RETURN       : NA
  /***********************************************************************/
  setMeta(metaTitle, metaKeywords, metaDescription) {
    this.title.setTitle(metaTitle);
    this.meta.updateTag({ name: 'keywords', content: metaKeywords });
    this.meta.updateTag({ name: 'description', content: metaDescription });
  }
  /******************************************************************/
}
