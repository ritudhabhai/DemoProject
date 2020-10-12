import { Injectable } from '@angular/core';
import swal from 'sweetalert2';
import { ErrorMessages } from '../TS-files/errorMessages';

@Injectable({
	providedIn: 'root',
})
export class ShowErrorService {

	constructor(private errorMessage: ErrorMessages) { }

	/***************************************************************************
	@PURPOSE      : To show validation message
	@PARAMETERS   : field_name, errorObj?
	@RETURN       : error message
	****************************************************************************/
	showError(field, errorObj?) {
		return this.errorMessage.getError(field, errorObj);
	}
	/****************************************************************************/

	/**************************************************************************
	@PURPOSE      : We can use following function to use Toaster Service.
	@PARAMETERS   : field_name, errorObj?
	@RETURN       : error message
	/**************************************************************************/
	popToast(type, title) {
		swal({
			position: 'center',
			type,
			text: title,
			showConfirmButton: false,
			timer: 2000,
			customClass: 'custom-toaster',
		});
	}

	confirmpopToast(type, title, buttonName) {
		return swal({
			// title: 'Are you sure?',
			text: title,
			type,
			showCancelButton: true,
			confirmButtonText: buttonName,
			confirmButtonClass: 'btn btn-primary',
			cancelButtonClass: 'btn btn--outline-primary',
		});
	}
	/*************************************************************************/

}
