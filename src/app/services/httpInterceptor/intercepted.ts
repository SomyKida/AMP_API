import { Injectable } from "@angular/core";
import { ConnectionBackend, RequestOptions, Request, RequestOptionsArgs, Response, Http, Headers } from "@angular/http";



@Injectable()
export class InterceptedHttp extends Http {
    constructor(backend: ConnectionBackend, defaultOptions: RequestOptions) {
        super(backend, defaultOptions);
    }

    request(url: string | Request, options?: RequestOptionsArgs) {
        return super.request(url, options)
        // .catch(err => {
        //     try {
        //         var error = JSON.parse(err._body);
        //         if (err.name == "TimeoutError") {
        //             return Observable.throw({ status: 420 })
        //         } else if (error.errorMessage == 'Session Expired') {

        //             return Observable.throw({ status: 'session', message: 'session expired' });
        //         } else
        //             return Observable.throw(err);
        //     } catch (exception) {
        //         return Observable.throw(err);
        //     }
        // });
    }

    get(url: string, options?: RequestOptionsArgs) {
        return super.get(url, this.getRequestOptionArgs(options));
    }

    post(url: string, body: string, options?: RequestOptionsArgs) {
        return super.post(url, body, this.getRequestOptionArgs(options));
    }

    put(url: string, body: string, options?: RequestOptionsArgs) {
        return super.put(url, body, this.getRequestOptionArgs(options));
    }

    delete(url: string, options?: RequestOptionsArgs) {
        return super.delete(url, this.getRequestOptionArgs(options));
    }

    private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = new RequestOptions();
        }
        if (options.headers == null) {
            options.headers = new Headers();
        }
        var _token = localStorage.getItem('token');
        if (_token)
            options.headers.set('Authorization', _token);

        options.headers.set("Cache-Control", "no-cache");

        return options;
    }
}