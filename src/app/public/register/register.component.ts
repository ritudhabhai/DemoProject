import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Constants
import { URLConstants } from '../../common/constants/routerLink-constants';
// Service
import { ShowErrorService } from '../../common/services/service/show-error.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {
  URLConstants = URLConstants;

  constructor(public showErrorService: ShowErrorService, private router: Router) { }

  ngOnInit(): void {
  }

  /*************************************************************
  @Purpose     : Registration
  @Parameter   : form, register
  @Return      : NA
  /*************************************************************/
  register: any = {firstname:'',lastname:'',phone:'',email:'',password:''};
  submitted = false;
  showErrPassword = false;
  registeration(form, register) {
    this.submitted = true;
    if (form.valid && (register.password == register.confirm_password)) {
      this.showErrPassword = false;
      this.showErrorService.popToast('success',"You have been successfully regitered");
      this.router.navigate([URLConstants.LOGIN]);
    } else {
      if(register.password != register.confirm_password){
        this.showErrPassword = true;
      }
    }
  }
  /*************************************************************/
}
