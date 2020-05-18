import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
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
          case 'username': { message = required.username; } break;
          case 'firstname': { message = required.firstname; } break;
          case 'lastname': { message = required.lastname; } break;
          case 'emailId': { message = required.emailId; } break;
          case 'mobile': { message = required.mobile; } break;
          case 'password': { message = required.password; } break;
          case 'confirmPassword': { message = required.confirmPassword; } break;
        }
      } else if (error.pattern) {
        const pattern = this.MSG.ERROR.PATTERN;
        switch (field) {
          case 'emailId': { message = pattern.emailId; } break;
          case 'password': { message = pattern.password; } break;
        }
      } else if (error.minlength) {
        const minlength = this.MSG.ERROR.MINLENGTH;
        switch (field) {
          case 'mobile': { message = minlength.mobile; } break;
        }
      }
      return message;
    }
  }
}
