import Swal from 'sweetalert2';
import config from '../config';

const ErrorController = {
    errorServer: (response) => {
        if(response.status == 403) {
            ErrorController.errorAuth();
        }
    },
    errorAuth: () => {
        Swal.fire({
            title: 'You are not signed in',
            icon: 'warning',
            showCancelButton: false,
            confirmButtonText: 'Ok, sign me in',
        }).then((result) => {
            window.location = config.routes.sign_in();
        });
    }
}

export default ErrorController;