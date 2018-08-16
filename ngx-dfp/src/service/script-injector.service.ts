import { Injectable } from '@angular/core';

import { HttpErrorService } from './http-error.service';

@Injectable()
export class ScriptInjectorService {

  constructor(private httpError: HttpErrorService) { }

  private completeURL(url) {
    const ssl = document.location.protocol === 'https:';
    return (ssl ? 'https:' : 'http:') + url;
  }

  private createScript(url) {
    const script = document.createElement('script');

    script.async = true;
    script.type = 'text/javascript';
    script.src = this.completeURL(url);

    return script;
  }

  private promiseScript(script, url) {
    const promise = new Promise((resolve, reject) => {
      script.onload = () => {
        resolve(script);
      };
      script.onerror = () => {
        reject({
          path: url,
          loaded: false
        });
      };
    });

    promise.catch(response => {
      this.httpError.httpError({ status: 400 }, `loading script "${url}"`);
    });

    return promise;
  }

  injectScript(script) {
    const head = document.head || document.querySelector('head');
    head.appendChild(script);
  }

  scriptInjector(url) {
    const script = this.createScript(url);
    this.injectScript(script);
    return this.promiseScript(script, url);
  }

}
