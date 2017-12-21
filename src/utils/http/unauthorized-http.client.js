import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/dom/ajax';


export class UnAuthorizedHttpClient {

  get = url => {
    return Observable.ajax({ method: "GET", url: url  });
  };

  post = url => {
    return Observable.ajax({ method: "POST", url: url });
  };
  
}
