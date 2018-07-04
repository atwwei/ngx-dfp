import { HttpErrorService } from './http-error.service';
export declare class ScriptInjectorService {
    private httpError;
    constructor(httpError: HttpErrorService);
    private completeURL(url);
    private createScript(url);
    private promiseScript(script, url);
    injectScript(script: any): void;
    scriptInjector(url: any): Promise<{}>;
}
