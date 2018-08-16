import { Injectable } from '@angular/core';

@Injectable()
export class HttpErrorService {

  httpError(response, message) {
    console.log(`Error (${response.status}) ${message ? message : ''}`);
  }

  isErrorCode = function (code) {
    if (typeof code === 'number') {
      return !(code >= 200 && code < 300);
    }
    return code[0] !== '2';
  };

}
