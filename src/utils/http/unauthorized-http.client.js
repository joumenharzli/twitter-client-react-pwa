import { ajax } from "rxjs";

export class UnAuthorizedHttpClient {
  get = url => {
    return ajax({ method: "GET" });
  };

  post = url => {
    return ajax({ method: "POST" });
  };
}
