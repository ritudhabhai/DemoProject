import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { messages } from '../../constants/errorMessagesData';

@Injectable()
export class ErrorMessages {
  public MSG = (messages as any);

  constructor() { }

  /*****************************************************************************************
  @PURPOSE      : To Show Error on Form validations
  @PARAMETERS   : field, error
  @RETURN       : message
  /*****************************************************************************************/
  getError(field, error) {
    let message = '';
    if (error) {
      if (error.required) {
        const required = this.MSG.ERROR.REQUIRED;
        switch (field) {
          case 'email': { message = required.email; } break;
        }
      } else if (error.pattern) {
        const pattern = this.MSG.ERROR.PATTERN;
        switch (field) {
          case 'email': { message = pattern.email; } break;
        }
      } else if (error.minlength) {
        const minlength = this.MSG.ERROR.MINLENGTH;
        switch (field) {
          case 'mobile': { message = minlength.PhoneNo; } break;
        }
      }
      return message;
    }
  }
}
